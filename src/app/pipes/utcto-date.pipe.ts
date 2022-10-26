import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'utcToDate'
})
export class UTCToDatePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const calculatedDateObj = new Date(value*1000);
    let hour = calculatedDateObj.getHours();
    let mins = calculatedDateObj.getMinutes();
    let period = (hour > 12) ? 'PM' : 'AM';
    return ((period === 'PM') ? (hour - 12)+'' : hour)+'' + ':' + (mins < 10 ? ('0'+mins) : mins) + ' '+period;
  }

}
