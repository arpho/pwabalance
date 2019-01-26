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
  message: string;
  features: Array<string> = [];
  newFeatures: Array<string> = [];


  constructor(public info: InfoService,
  ) {

  }


  ngOnInit() {
    this.info.getPackage().subscribe(data => {
      this.version = data['version'];
      this.appName = data['name'];
      this.email = data['email'];
      this.features = data['features'];
      this.newFeatures = data['newFeatures'];
      this.info.areThereNews().then(v => {
        if (v === 1) {
          this.message = `grazie per usare ${this.appName}`;
        }
        if (v === 2) {
          this.message = `${this.appName} è stata aggiornata alla versione ${this.version}`;
        }
        this.info.setActualVersion().then(ok => { console.log('version set', ok); });
      }
      );
    });
  }

}
