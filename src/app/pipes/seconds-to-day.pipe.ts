import { Pipe, PipeTransform } from '@angular/core';
import { WeatherMapApiService } from '../services/weather-map-api.service';

@Pipe({
  name: 'secondsToDay',
})
export class SecondsToDayPipe implements PipeTransform {
  constructor(private weatherMapService: WeatherMapApiService) {}

  transform(seconds: number, ...args: unknown[]): string {
    return this.weatherMapService.getNameOfWeekDay(
      new Date(seconds * 1000).getDay()
    );
  }
}
