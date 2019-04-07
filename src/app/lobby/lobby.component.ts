import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.less']
})
export class LobbyComponent implements OnInit {

  help: boolean = true;
  license: boolean;
  innerHeight: number;

  @HostListener('window:resize', ['$event'])
    onResize() {
      this.innerHeight = window.innerHeight;
    }

  constructor() { }

  ngOnInit() {
    this.innerHeight = window.innerHeight;
  }

}
