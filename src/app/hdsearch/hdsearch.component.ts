import { Component, OnInit, Input, HostListener } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-hdsearch',
  templateUrl: './hdsearch.component.html',
  styleUrls: ['./hdsearch.component.less']
})
export class HdsearchComponent implements OnInit {

  innerHeight: number;

@Input('list') loglist: Array<string>;
@Input('hd') hdseries: string;
@Input('mode') mode: string;
@HostListener('window:resize', ['$event'])
  onResize() {
    this.innerHeight = window.innerHeight;
  }

  constructor(
      public log: LogService
  ) {}

  ngOnInit() {
    this. innerHeight = window.innerHeight;
  }

}
