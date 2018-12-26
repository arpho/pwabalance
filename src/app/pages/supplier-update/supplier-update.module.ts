import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SupplierUpdatePage } from './supplier-update.page';

const routes: Routes = [
  {
    path: '',
    component: SupplierUpdatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SupplierUpdatePage]
})
export class SupplierUpdatePageModule {}
