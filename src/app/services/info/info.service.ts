import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(public http: HttpClient) { }




  getVersion() {
    return this.http.get('assets/package.json');
  }
}

