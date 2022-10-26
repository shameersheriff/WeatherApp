import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';
  searchQuery: string = '';

  ngOnInit() {}

  onSearchChange(event: any): void {
    this.searchQuery = event;
  }
}
