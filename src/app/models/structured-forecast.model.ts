export class StructuredForecast {
  day: string;
  minTemp: string;
  maxTemp: string;

  constructor(data?: any) {
    this.day = data.day;
    this.minTemp = data.minTemp;
    this.maxTemp = data.maxTemp;
  }
}
