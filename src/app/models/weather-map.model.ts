import { Weather } from './weather.model';

export class WeatherMap {
  lon: number;
  lat: number;
  weather: Weather[];
  base: string;
  main: any;
  wind: any;
  rain: any;
  clouds: any;
  sys: any;
  timezone: number;
  name: string;
  visibility: number;
  dt: number;

  constructor(data?: any) {
    this.lon = data.coord?.lon;
    this.lat = data.coord?.lat;
    this.weather = data.weather;
    this.base = data.base;
    this.main = data.main;
    this.wind = data.wind;
    this.rain = data.rain;
    this.clouds = data.clouds;
    this.sys = data.sys;
    this.timezone = data.timezone;
    this.name = data.name;
    this.visibility = data.visibility;
    this.dt = data.dt;
  }
}
