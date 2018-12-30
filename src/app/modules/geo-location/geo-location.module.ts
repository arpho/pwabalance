import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AgmCoreModule } from '@agm/core';
import { GeoLocalizeComponent } from './components/geo-localize/geo-localize.component';
import { AgmComponent } from './components/agm/agm.component';
import { DistanceSorterPipe } from './pipes/distance-sorter.pipe';
import {GeoService} from './services/geo-service';

@NgModule({
  declarations: [
    GeoLocalizeComponent,
    AgmComponent,
    DistanceSorterPipe],
  imports: [
    CommonModule,


    IonicModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyClc8roQ21e1VFTzJTS0XkG7pVA_c3SGis'
    })
  ],
  exports: [GeoLocalizeComponent, AgmComponent, DistanceSorterPipe],

})
export class GeoLocationModule { }
