import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meterToKM'
})
export class MeterToKMPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value/1000 + ' KM';
  }

}
