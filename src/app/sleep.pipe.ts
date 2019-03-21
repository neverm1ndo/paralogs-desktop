import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sleep'
})
export class SleepPipe implements PipeTransform {

  transform(ms: any): any {
    return (ms/1000).toFixed(2) + ' секунд';
  }

}
