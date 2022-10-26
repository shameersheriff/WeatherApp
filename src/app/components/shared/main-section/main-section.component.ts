import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
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

  constructor(private weatherMapService: WeatherMapApiService) {}

  ngOnInit(): void {
    this.search();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.searchQuery.firstChange) {
      this.searchQuery = changes.searchQuery.currentValue;
      this.search();
    }
  }

  search() {
    if (!this.searchQuery) {
      this.searchQuery = 'colombo';
    }
    this.weatherMapService
      .searchByCity(this.searchQuery)
      .subscribe((data: any) => {
        this.weatherMap = new WeatherMap(data);
      });
  }

  defaultLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }
  showPosition(position: any) {
    console.log(
      'Latitude: ' +
        position.coords.latitude +
        ' Longitude: ' +
        position.coords.longitude
    );
    this.weatherMapService
      .searchByCoordinates(position.coords.latitude, position.coords.longitude)
      .subscribe((data: any) => {
      });
  }
}
