import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deathReasons'
})
export class DeathReasonsPipe implements PipeTransform {

  transform(reason: any): any {
    let reasonCode = reason.split(/\s/);
    return reasonCode[reasonCode.length - 1];
  }

}
