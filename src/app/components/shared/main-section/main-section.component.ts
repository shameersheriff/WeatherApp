import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { combineLatest } from 'rxjs';
import { StructuredForecast } from 'src/app/models/structured-forecast.model';
import { WeatherForecast } from 'src/app/models/weather-forecast.model';
import { WeatherMap } from 'src/app/models/weather-map.model';
import { WeatherMapApiService } from 'src/app/services/weather-map-api.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
})
export class MainSectionComponent implements OnInit {
  @Input() searchQuery: string = '';
  weatherMap!: WeatherMap;
  forecast!: WeatherForecast;
  todaysForecast!: WeatherForecast;
  tempMeasurement: string = 'C';
  structuredForecastList!: StructuredForecast[];

  constructor(private weatherMapService: WeatherMapApiService) {}

  ngOnInit(): void {
    this.search();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.searchQuery.firstChange) {
      this.searchQuery = changes.searchQuery.currentValue;
      this.search();
    }
  }

  search(): void {
    if (!this.searchQuery) {
      this.searchQuery = 'colombo';
    }
    combineLatest([
      this.weatherMapService.searchByCity(this.searchQuery),
      this.weatherMapService.forecastByCity(this.searchQuery),
    ]).subscribe(([weatherData, forecast]) => {
      this.weatherMap = new WeatherMap(weatherData);
      this.forecast = new WeatherForecast(forecast);
      this.todaysForecast = new WeatherForecast(forecast);
      this.todaysForecast.list = this.todaysForecast.list.slice(0,8);
      this.structuredForecastList = this.weatherMapService.getStructuredForecastByDay(this.forecast);
    });
  }
}
