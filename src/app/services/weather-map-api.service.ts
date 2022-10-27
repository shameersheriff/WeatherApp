import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
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
    protected convertTemp: ConvertTempPipe,
    private _snackBar: MatSnackBar
  ) {}

  searchByCity<T>(searchQuery: string) {
    let url = this.baseUrl + searchQuery + '&appid=' + this.appID;
    return new Observable((subscriber) => {
      this.http
        .get(url)
        .pipe(
          catchError((err) => {
            this.openSnackBar("Error occured!", 'Close');
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

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  forecastByCity<T>(searchQuery: string) {
    let url = this.forecastUrl + searchQuery + '&appid=' + this.appID;
    return new Observable((subscriber) => {
      this.http
        .get(url)
        .pipe(
          catchError((err) => {
            this.openSnackBar("Error occured!", 'Close');
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
            this.openSnackBar("Error occured!", 'Close');
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
