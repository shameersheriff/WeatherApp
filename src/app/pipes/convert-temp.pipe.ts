import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTemp',
})
export class ConvertTempPipe implements PipeTransform {
  transform(value: number, ...args: string[]): string {
    const [measurement] = args;
    let temp = '';
    switch (measurement.toLowerCase()) {
      case 'c':
        return temp = (value - 273.15).toFixed(2) + ' °' + measurement.toUpperCase();
      case 'f':
        return temp = (((value - 273.15) * 9 / 5)+32).toFixed(2) + ' °' + measurement.toUpperCase();
      case 'k':
        return temp = value + ' °' + measurement.toUpperCase();
      default:
        return temp = value + ' K';
    }
  }
}
