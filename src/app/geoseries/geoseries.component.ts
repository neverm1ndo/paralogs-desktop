import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-geoseries',
  templateUrl: './geoseries.component.html',
  styleUrls: ['./geoseries.component.less']
})
export class GeoseriesComponent implements OnInit {

  @Input('geoseries') geoseries : any;

  constructor() { }

  ngOnInit() {
  }

}
