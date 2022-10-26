import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTemp',
})
export class ConvertTempPipe implements PipeTransform {
  transform(value: number, measurement: string, decimal: number): string {

    let temp = '';
    switch (measurement.toLowerCase()) {
      case 'c':
        return temp = (value - 273.15).toFixed(decimal) + '°';
      case 'f':
        return temp = (((value - 273.15) * 9 / 5)+32).toFixed(decimal) + '°';
      case 'k':
        return temp = value + '';
      default:
        return temp = value + '';
    }
  }
}
