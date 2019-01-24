import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { configs } from './configs/configs';
import * as firebase from 'firebase/app';
import { InfoService } from './services/info/info.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'categorie',
      url: '/categorie',
      icon: 'pricetags'
    },
    {
      title: 'pagamenti',
      url: '/pagamenti',
      icon: 'cash'
    },
    {
      title: 'fornitori',
      url: '/fornitori',
      icon: 'people'
    },
    {
      title: 'carrelli della spesa',
      url: '/home',
      icon: 'cart'
    },
    {
      title: 'Grafici',
      url: '/grafici',
      icon: 'stats'
    },
    {
      title: 'info',
      url: '/info',
      icon: 'information-circle'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private info: InfoService
  ) {
    this.initializeApp();
    if (!firebase.apps.length) {
      firebase.initializeApp(configs.firebase);
    }
    if (this.info.areThereNews()) {
      console.log('update');
      // top go to info page
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
