import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { configs } from './configs/configs';
import * as firebase from 'firebase/app';
import { InfoService } from './services/info/info.service';
import { Router } from '@angular/router';

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
    private info: InfoService,
    private router: Router
  ) {
    this.initializeApp();
    if (!firebase.apps.length) {
      firebase.initializeApp(configs.firebase);
    }
    this.info.areThereNews().then(news => {
      if (news > 0) {
        this.router.navigateByUrl('info');
      } else {
        this.router.navigateByUrl('home');
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
