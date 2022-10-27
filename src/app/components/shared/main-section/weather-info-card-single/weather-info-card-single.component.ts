import { Component, Input, OnInit } from '@angular/core';
import { WeatherInfoCard } from 'src/app/models/weather-info-card.model';

@Component({
  selector: 'app-weather-info-card-single',
  templateUrl: './weather-info-card-single.component.html',
  styleUrls: ['./weather-info-card-single.component.scss']
})
export class WeatherInfoCardSingleComponent implements OnInit {

  @Input()
  weatherInfo!: WeatherInfoCard[];

  constructor() { }

  ngOnInit(): void {
  }

}
