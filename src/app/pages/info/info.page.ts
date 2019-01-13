import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/info/info.service';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  version: string

  constructor(public info: InfoService,
    public http: HttpClient) {

  }

  scan() {
    console.log('click');
  }

  ngOnInit() {
    this.http.get('assets/angular.json').subscribe(data => {
      this.version = data['version'];
    });
  }

}
