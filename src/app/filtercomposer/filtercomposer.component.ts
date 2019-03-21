import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OptionsService } from '../options.service'

@Component({
  selector: 'app-filtercomposer',
  templateUrl: './filtercomposer.component.html',
  styleUrls: ['./filtercomposer.component.less']
})
export class FiltercomposerComponent implements OnInit {

  filterForm = new FormGroup({
    weapBuy: new FormControl(),
    killDeath: new FormControl(),
    spawn: new FormControl(),
    connection: new FormControl(),
    colChange: new FormControl(),
    preprocs: new FormControl(),
    dateFrom: new FormControl(),
    dateTo: new FormControl(),
    view: new FormControl(),
    litGr: new FormControl(),
    litPm: new FormControl(),
    idnick:new FormControl()
  });

  constructor(
    public options: OptionsService
  ) { }

  setFilter() {
    let changedOpt = this.filterForm.getRawValue();
    window.localStorage.setItem('filter', JSON.stringify(changedOpt));
    this.options.options.next(changedOpt);
  }

  ngOnInit() {
    this.filterForm.setValue(JSON.parse(window.localStorage.getItem('filter')))
  }

}
