import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'my-agm-map',
  templateUrl: './agm.component.html',
  styleUrls: ['./agm.component.scss']
})
export class AgmComponent implements OnInit {

  title = 'My first AGM project';
  lat = 37.7456284;
  lng = 15.146945299999999;
  locationChoosen = false;
  /**
latitude
:

longitude
:
15.146945299999999
 */


  constructor(public agm: AgmCoreModule) {


  }
  chooseLocation(ev) {
    this.lat = ev.coords.lat;
    this.lng = ev.coords.lng;
    this.locationChoosen = true;
    console.log(ev.coords);
  }

  ngOnInit() {
  }

}
