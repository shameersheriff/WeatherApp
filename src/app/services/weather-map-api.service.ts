import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { StructuredForecast } from '../models/structured-forecast.model';
import { WeatherForecast } from '../models/weather-forecast.model';
import { ConvertTempPipe } from '../pipes/convert-temp.pipe';

@Injectable({
  providedIn: 'root',
})
export class WeatherMapApiService {
  protected baseUrl = environment.openWeatherMapAPISearch_URL;
  protected forecastUrl = environment.openWeatherMapAPIForecast_URL;
  protected appID = environment.openWeatherMapAPI_AppID;

  constructor(
    protected http: HttpClient,
    protected convertTemp: ConvertTempPipe
  ) {}

  searchByCity<T>(searchQuery: string) {
    let url = this.baseUrl + searchQuery + '&appid=' + this.appID;
    return new Observable((subscriber) => {
      this.http
        .get(url)
        .pipe(
          catchError((err) => {
            subscriber.error(err);
            return EMPTY;
          }),
          first()
        )
        .subscribe(
          (responce: any) => {
            subscriber.next(responce as T);
          },
          () => {}
        );
    });
  }

  forecastByCity<T>(searchQuery: string) {
    let url = this.forecastUrl + searchQuery + '&appid=' + this.appID;
    return new Observable((subscriber) => {
      this.http
        .get(url)
        .pipe(
          catchError((err) => {
            subscriber.error(err);
            return EMPTY;
          }),
          first()
        )
        .subscribe(
          (responce: any) => {
            subscriber.next(responce as T);
          },
          () => {}
        );
    });
  }

  getStructuredForecastByDay(forecast: WeatherForecast): StructuredForecast[] {
    let structuredForecastList: StructuredForecast[] = [];
    structuredForecastList.push({
      day: this.getNameOfWeekDay(new Date(forecast.list[0].dt * 1000).getDay()),
      minTemp: this.convertTemp.transform(
        forecast.list[0].main.temp_min,
        'C',
        2
      ),
      maxTemp: this.convertTemp.transform(
        forecast.list[0].main.temp_max,
        'C',
        2
      ),
    });
    for (let x = 0; x < forecast.list.length; x++) {
      const element = forecast.list[x];
      for (let y = 0; y < structuredForecastList.length; y++) {
        const structuredElement = structuredForecastList[y];
        if (
          structuredElement.day ===
          this.getNameOfWeekDay(new Date(element.dt * 1000).getDay())
        ) {
          let minTemp = this.convertTemp.transform(
            element.main.temp_min,
            'C',
            2
          );
          let maxTemp = this.convertTemp.transform(
            element.main.temp_max,
            'C',
            2
          );
          if (structuredElement.minTemp > minTemp) {
            structuredElement.minTemp = minTemp;
          }
          if (structuredElement.maxTemp < maxTemp) {
            structuredElement.maxTemp = maxTemp;
          }
        }
        else{
          structuredForecastList.push({
            day: this.getNameOfWeekDay(new Date(element.dt * 1000).getDay()),
            minTemp: this.convertTemp.transform(
              element.main.temp_min,
              'C',
              2
            ),
            maxTemp: this.convertTemp.transform(
              element.main.temp_max,
              'C',
              2
            ),
          });
        }
        continue;
      }
    }
    return structuredForecastList;
  }

  getNameOfWeekDay(day: number): string {
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    return weekday[day];
  }

  searchByCoordinates<T>(lat: string, long: string) {
    let url =
      this.baseUrl + '?lat=' + lat + '?long=' + long + '&appid=' + this.appID;
    return new Observable((subscriber) => {
      this.http
        .get(url)
        .pipe(
          catchError((err) => {
            subscriber.error(err);
            return EMPTY;
          }),
          first()
        )
        .subscribe(
          (responce: any) => {
            subscriber.next(responce as T);
          },
          () => {}
        );
    });
  }
}
