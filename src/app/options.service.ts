import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Options } from './options.mock'

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  options: BehaviorSubject<Options> = new BehaviorSubject<Options>(JSON.parse(window.localStorage.getItem('filter')));

  constructor() {
  }
}
