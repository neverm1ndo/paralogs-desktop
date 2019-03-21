import { Component, HostListener} from '@angular/core';
// import { Location } from "@angular/common";
import { KEY_CODE } from './keycodes.mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(
  // private location: Location,
  private router: Router
) {}

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
   // if (event.keyCode === KEY_CODE.ESC) {
   //   this.location.back();
   // }
   // if (event.keyCode === KEY_CODE.F2) {
   //   this.location.forward();
   // }
   if (event.altKey) {
     switch (event.keyCode) {
       case KEY_CODE.F:
        this.router.navigate(['/full:']);
        break;
      case KEY_CODE.A:
       this.router.navigate(['/acheat:']);
       break;
     }
   }
  }
}
