import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;


@Component({
  selector: 'app-geo-localize',
  templateUrl: './geo-localize.component.html',
  styleUrls: ['./geo-localize.component.scss']
})
export class GeoLocalizeComponent implements OnInit {

  constructor() { }
  
  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);
  }

  ngOnInit() {
  }

}
