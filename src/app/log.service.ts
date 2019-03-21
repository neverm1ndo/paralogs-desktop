import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(
    public http: HttpClient
  ) { }
  currentTarget: string;
  public file: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  fileInfo: File;
  progress: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  getLogFile(filename: string) {
  return this.http.get(filename, {responseType: 'text'})
    .pipe(
      tap(
        data => {console.log('Log ' + filename + ' sucessfuly parsed!\n' + 'Registered: lines ' + data.length)},
        error => {console.error(error)}
      )
    );
  }
  fileRead(e: any) {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file, 'cp1251');
    this.fileInfo = file;
    this.status.next(false);
    reader.onprogress = (e) => {
           if (e.lengthComputable) {
            return this.progress.next(Math.floor((e.loaded / e.total) * 100));
           }
       }
    reader.onload = () => {
      this.status.next(true);
      this.progress.next(0);
        return this.file.next(reader.result);
      }
  }
  parseGeoSeries(gs: string) {
    let parsed = gs.match(/\{(.*?)\}/g);
    parsed = Object.assign({}, parsed);
    let series = {
            id: parsed[0],
            ip: parsed[1],
            as: parsed[2],
            cc: parsed[3],
            city: parsed[4],
            org: parsed[5],
            ss: parsed[6],
            v: parsed[7],
            hd: parsed[8],
            sm: parsed[9],
            di: parsed[10],
            cp: parsed[11],
            hw: parsed[12],
            mg: parsed[13],
            pi: parsed[14],
            cn: parsed[15],
            un: parsed[16],
            s: parsed[27],
            g: parsed[30],
            c: parsed[31]
          };
          for (let key in series) {
            series[key] = series[key].match(/[^\{\}':']+/g)[1];
          };
          return Object.values(series);
  }
}
