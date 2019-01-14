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

  constructor(public info: InfoService,
  ) {

  }

  scan() {
    console.log('click');
  }

  ngOnInit() {
    this.info.getVersion().subscribe(data => {
      this.version = data['version'];
    });
  }

}
