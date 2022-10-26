import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherMapApiService {
  protected baseUrl = environment.openWeatherMapAPI_URL;
  protected appID = environment.openWeatherMapAPI_AppID;

  constructor(protected http: HttpClient) { }

  searchByCity<T>(searchQuery: string){
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

  searchByCoordinates<T>(lat: string, long: string){
    let url = this.baseUrl + '?lat=' + lat + '?long=' + long + '&appid=' + this.appID;
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
