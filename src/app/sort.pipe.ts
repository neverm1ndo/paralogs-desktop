import { Pipe, PipeTransform } from '@angular/core';
import { Line } from './line.mock';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(line: Line[], player: string): Line[] {
    if(!player) return [];
    if(!player) return line;
    player = player.toLowerCase();
    let players = player.split('&');
    if (players.length > 1) {
      return line.filter( it => { // FIXME: need loop here INDIAN CODE
          return it.player.nickname.toLowerCase().includes(players[0]) ||
          it.player.nickname.toLowerCase().includes(players[1])
          ||
          it.player.nickname.toLowerCase().includes(players[2])
      })
    } else {
      return line.filter( it => {
                // console.log(it);
        return it.player.nickname.toLowerCase().includes(player.toLowerCase());
      }
    );
    }
   }

}
