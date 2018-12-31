import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SupplierCreatePage } from './supplier-create.page';
import { ItemModule } from '../../modules/item/item.module';
import { GeoLocationModule } from '../../modules/geo-location/geo-location.module';
import { DynamicFormModule } from '../../modules/dynamic-form/dynamic-form.module';

const routes: Routes = [
  {
    path: '',
    component: SupplierCreatePage
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
  declarations: [SupplierCreatePage,]
})
export class SupplierCreatePageModule { }
