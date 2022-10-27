import { WeatherMap } from './weather-map.model';

export class WeatherForecast {
  city: any;
  cnt: number;
  list: WeatherMap[];

  constructor(data?: any) {
    this.city = data.city;
    this.cnt = data.cnt;
    this.list = data.list;
  }
}
