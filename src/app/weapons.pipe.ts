import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weapons'
})
export class WeaponsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
