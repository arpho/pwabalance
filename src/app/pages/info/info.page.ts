import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/info/info.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  version: string;
  appName: string;
  email: string;

  constructor(public info: InfoService,
  ) {

  }

  scan() {
    console.log('click');
  }

  ngOnInit() {
    this.info.getPackage().subscribe(data => {
      this.version = data['version'];
      this.appName = data['name'];
      this.email = data['email'];
    });
  }

}
