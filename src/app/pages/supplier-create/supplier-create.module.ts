import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SupplierCreatePage } from './supplier-create.page';

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
    RouterModule.forChild(routes)
  ],
  declarations: [SupplierCreatePage]
})
export class SupplierCreatePageModule {}
