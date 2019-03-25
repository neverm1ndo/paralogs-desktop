import { Component, OnInit, HostListener } from '@angular/core';
import { LogService } from '../log.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PaginationService } from '../pagination.service';
import { KEY_CODE } from '../keycodes.mock';

@Component({
  selector: 'app-playerlog',
  templateUrl: './playerlog.component.html',
  styleUrls: ['./playerlog.component.less']
})
export class PlayerlogComponent implements OnInit {

  loglist : any;
  player: string;
  hdseries: string;
  preproc: string;
  mod: string;

  pager: any = {};

  pagedItems: any[];

  constructor(
    private log : LogService,
    private route: ActivatedRoute,
    public pagination: PaginationService
  ) { }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.ctrlKey) {
      switch (event.keyCode) {
        case KEY_CODE.ARROW_L:
          if (this.pager.currentPage != 1) {
            this.setPage(this.pager.currentPage - 1)
          };
        break;
        case KEY_CODE.ARROW_R:
          if (this.pager.currentPage < this.pagedItems.length - 1) {
            this.setPage(this.pager.currentPage + 1);
          };
        break;
      };
    };
  }

  logToCollection(log: string) {
    let logObj = new Object;
    let logarr = log.split(/\n/g);
    for (var i = 1; i < logarr.length - 1; ++i) {
      let info = logarr[i].split(/\s/g);
      logObj[i] = {
        date: info[0],
        process: info[2],
        player: {
          nickname: info[3],
          id: info[4],
          motion: logarr[i].split(info[4])[1],
          geo: null
        }
      }
    }
    return Object.values(logObj);
  }

  parseSearch(params: any) {
    let splited : Array<string> = (params['player'].split(':'));
    if (params['player'].match(':')) {
      switch (splited[0]) {
        case 'hd':
          this.hdseries = splited[1];
          this.mod = 'hd';
          break;
        case 'sm':
          this.hdseries = splited[1];
          this.mod = 'sm';
          break;
        case 'acheat':
          this.preproc = 'acheat';
          this.mod = 'acheat';
          break;
        case 'full':
          this.mod = 'full';
          break;
        case 'adm':
          this.preproc = 'auth';
          this.mod = 'adm';
          break;
      }
    } else {
      this.player = params['player'] || '';
      this.mod = 'player';
    }
  }

  setPage(page: number) {
    this.pager = this.pagination.getPager(this.loglist.length, page);
    this.pagedItems = this.loglist.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  ngOnInit() {
    this.route.params
    .subscribe(params => {
      this.parseSearch(params);
    });
    this.log.file.pipe(
    filter(log => log!==null))
    .subscribe( log => {
      this.loglist = this.logToCollection(log);
      this.log.loglist = this.loglist;
      this.setPage(1);
    });
  }

}
