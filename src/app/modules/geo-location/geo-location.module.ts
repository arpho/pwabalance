import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GeoLocalizeComponent } from './components/geo-localize/geo-localize.component';

@NgModule({
  declarations: [GeoLocalizeComponent],
  imports: [
    CommonModule,

    IonicModule.forRoot(),
  ],
  exports: [GeoLocalizeComponent]
})
export class GeoLocationModule { }
