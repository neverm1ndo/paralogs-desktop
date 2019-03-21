import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormControl } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { LogService } from '../log.service';

@Component({
  selector: 'app-headsearch',
  templateUrl: './headsearch.component.html',
  styleUrls: ['./headsearch.component.less']
})
export class HeadsearchComponent implements OnInit {

  title = 'PARALOGS';
  currentNickname = new FormControl('');
  error: string;

  constructor(
    private router: Router,
    public log: LogService
  ) {}

  search(nickname: string) {
    if (nickname.length>=3 || nickname.length==0) {
      this.router.navigate(['/'+nickname]);
    } else {
      this.error = "Слишком короткое значение. Минимум 3 символа."
      setTimeout((t:any) => this.error=null, 3000);
    }
  }

  read(e: any) {
    this.log.fileRead(e);
    console.log(e);
  }

  ngOnInit() {
    this.router.events
        .pipe(filter(e => e instanceof NavigationEnd))
        .subscribe((e: NavigationEnd) => {
          this.currentNickname.setValue(decodeURI(e.url).slice(1));
   }).closed;
  }

}
