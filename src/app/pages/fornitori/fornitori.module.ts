import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ItemModule } from '../../modules/item/item.module';
import { GeoLocationModule } from '../../modules/geo-location/geo-location.module';


import { FornitoriPage } from './fornitori.page';
import { DynamicFormModule } from 'src/app/modules/dynamic-form/dynamic-form.module';

const routes: Routes = [
  {
    path: '',
    component: FornitoriPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ItemModule,
    GeoLocationModule,
    DynamicFormModule
  ],
  declarations: [FornitoriPage]
})
export class FornitoriPageModule { }
