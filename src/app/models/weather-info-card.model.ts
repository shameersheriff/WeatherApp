export class WeatherInfoCard {
  icon: string;
  label: string;
  heading: string;
  value: string;

  constructor(data?: any) {
    this.icon = data.icon;
    this.label = data.label;
    this.heading = data.heading;
    this.value = data.value;
  }
}

