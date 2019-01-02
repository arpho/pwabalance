import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/info/info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(public info: InfoService) { }

  scan() {
    console.log('click');
  }

  ngOnInit() {
    this.info.fileRead('./manifest.json');
  }

}
