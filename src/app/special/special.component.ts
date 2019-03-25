import { Component, OnInit, Input } from '@angular/core';
import { LogService } from '../log.service';
import { Processes } from '../processes.mock';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.less']
})
export class SpecialComponent implements OnInit {

  @Input ('date') date: number;
  @Input ('move') move: string;

  line: any;
  switch: boolean = false;

  constructor(
    public log :LogService
  ) {}

  processes = Processes;

  parseBan(motion: any) {
    if (typeof motion == 'string') {
      let newmotion = motion.toString().split(/\s/, 5);
      let reason = motion.toString().match(/'(.*?)'/);
      newmotion.push(reason[0]);
      return newmotion.slice(3,6);
    } else return motion;
  }
  parseHex(motion: any) {
    if (typeof motion == 'string')
      return motion = motion.split(/\s/);
    else return motion;
  }

  setLine() {
    let line: any = this.log.findActionById(this.date, this.move)[0];
    switch (this.move) {
      case 'kick':
        line.player.motion = this.parseBan(line.player.motion);
      break;
      case 'ban':
        line.player.motion = this.parseBan(line.player.motion);
      break;
      case 'mute':
        line.player.motion = this.parseHex(line.player.motion);
      break;
    }
    if (line!==undefined) {
      this.line = line;
    }
  }
  ngOnInit() {
    this.setLine();
  }

}
