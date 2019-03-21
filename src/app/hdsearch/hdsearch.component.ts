import { Component, OnInit, Input } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-hdsearch',
  templateUrl: './hdsearch.component.html',
  styleUrls: ['./hdsearch.component.less']
})
export class HdsearchComponent implements OnInit {

@Input('list') loglist: Array<string>;
@Input('hd') hdseries: string;
@Input('mode') mode: string;

  constructor(
      public log: LogService
  ) {}

  ngOnInit() {
  }

}
