import { Pipe, PipeTransform } from '@angular/core';
import { Line } from './line.mock';

@Pipe({
  name: 'preproc'
})

export class PreprocPipe implements PipeTransform {

  transform(line: Line[], preproc: string): Line[] {
    if(!preproc) return [];
    if(!preproc) return line;
    console.log(preproc);
    return line.filter( it => {
      return it.process.includes(preproc);
    });
  }
}
