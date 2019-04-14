import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(
    public http: HttpClient
  ) { }

  currentTarget: string;
  public file: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  status: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  progress: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  loglist: Array<any>;
  loading: boolean = false;
  info = {
    size: 0,
    length: 0
  }

  //Не знаю, вроде работает
  async multiFileRead(e: any) {
    let info = {
      size: 0,
      length: 0
    };
    let files = [].slice.call(e.target.files);
    let stack = [];
    info.length = files.length;
    files.forEach(async (file: File) => {
      let reader = new FileReader();
      info.size += file.size;
        reader.onload = async() => {
          await stack.push(reader.result.toString());

          stack.sort((fileA: string, fileB: string) => fileA.slice(0, 12).localeCompare(fileB.slice(0, 12)));

          this.progress.next(0);
          this.status.next(true);
          this.file.next(stack.join());
      }
      reader.onprogress = (e) => {
        if (e.lengthComputable) {
          this.progress.next(Math.floor((e.loaded / e.total) * 100));
          this.status.next(false);
        }
      }
      reader.readAsText(file, 'cp1251');
    });
    this.info = info;
  }

//На случай если понадобится чтение только одного файла
  fileRead(e: any) {
    let file = e.target.files[0];
    let reader = new FileReader();
    this.status.next(false);
    reader.onprogress = (e) => {
       if (e.lengthComputable) {
         this.progress.next(Math.floor((e.loaded / e.total) * 100));
       }
    }
    reader.onload = () => {
      this.status.next(true);
      this.progress.next(0);
      this.file.next(reader.result.toString());
    }
    reader.readAsText(file, 'cp1251');
  }

  parseGeoSeries(gs: string) {
    let series: any = {};
    let parsed = gs.match(/\{(.*?)\}/g);
      parsed.forEach((s: any) => {
        let serial = s.match(/[^\{\}':']+/g)[0];
        let ser_value = s.match(/[^\{\}':']+/g)[1]
        series[serial] = ser_value;
      });
      return series;
  }
  findActionById(date: number, move: string) {
    let list = this.loglist;
    if (move=='kick' || move=='ban') {
    return list.filter( it => {
        if (it!==undefined) {
          return it.date.includes(+date.toString().slice(0, date.toString().length - 3)) && it.process.includes('<connection/disconnect/' + move +'>');
        };
      });
    } else {
        return list.filter( it => {
        if (it!==undefined) {
          return it.date.includes(+date.toString().slice(0, date.toString().length - 3)) && it.process.includes('<mute/on/hand>');
        };
      });
    }
  }
}
