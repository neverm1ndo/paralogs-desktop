import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adms'
})
export class AdmsPipe implements PipeTransform {
  ids = {
    55: 'dimonml',
    140: 'hidan',
    1559: 'MIASKO',
    3067: 'Edelweiss',
    3119: 'Edelweiss',
    7510: 'Randy',
    9606: 'Гранит',
    9761: 'Winstrauze',
    10419: 'Гранит',
    14303: 'ежже',
    14301: 'evraЖko',
    14324: 'Вагоня',
    14325: 'Baks',
    14401: 'TECNAR',
    14723: 'NeoSkyline',
    14671: 'NeoSkyline',
    14782: 'SprinteR',
    14812: 'Baks',
    14816: 'TaH9I',
  }
  err = 'Не удалось опознать ID';
  transform(id: string): string {
    if (this.ids[id]) {
      return this.ids[id];
    } else {
      return this.err;
    }
  }

}
