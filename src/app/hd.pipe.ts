import { Pipe, PipeTransform } from '@angular/core';
import { Line } from './line.mock';

@Pipe({
  name: 'hd'
})
export class HdPipe implements PipeTransform {

  transform(line: Line[], hdseries: string): Line[] {
    if(!hdseries) return [];
    if(!hdseries) return line;
    hdseries = hdseries.toLowerCase();
      return line.filter( it => {
        if (it.player.motion!==undefined) {
          return it.player.motion.includes(hdseries.toLowerCase());
        };
      });
   }

}
