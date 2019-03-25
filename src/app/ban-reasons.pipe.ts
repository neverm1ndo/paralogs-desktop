import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'banReasons'
})
export class BanReasonsPipe implements PipeTransform {

reasons: any = {
  r1: 'Использование читов, трейнеров, модов, мэпинга или других способов нечестной игры',
  r2: 'Стрельба по пешим с водительского места транспорта с помощью автомата (smg,tec)',
  r3: 'Уход в паузу игры (escape) во время боя',
  r4: 'Использование любых ошибок игры',
  r5: 'Нецензурная лексика (в т. ч. завуалированная), оскорбления, ругань и флуд в общем/ближнем/командном чате',
  r6: 'Реклама любых ресурсов (спам)',
  r7: 'Использование имен, включающих часть или полностью состоящих из нецензурного слова',
  r8: 'Ограничение свободы действий сверх правил сервера',
  rass: 'Рассинхонизация с сервером, необходимо перезайти на сервер.',
  obh: 'Обход ручной или автоматической заглушки'
}

  transform(reason: any): any {
    if (reason.match('1')) {
      return this.reasons.r1;
    }
    if (reason.match('2')) {
      return this.reasons.r2;
    }
    if (reason.match('3')) {
      return this.reasons.r3;
    }
    if (reason.match('4')) {
      return this.reasons.r4;
    }
    if (reason.match('5')) {
      return this.reasons.r5;
    }
    if (reason.match('6')) {
      return this.reasons.r6;
    }
    if (reason.match('7')) {
      return this.reasons.r7;
    }
    if (reason.match('ник')) {
      return this.reasons.r7;
    }
    if (reason.match('обход')) {
      return this.reasons.obh;
    }
    if (reason.match('8')) {
      return this.reasons.r8;
    }
    if (reason.match('расс')) {
      return this.reasons.rass;
    }
  }

}
