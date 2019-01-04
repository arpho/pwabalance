import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShoppingKartCreatePage } from './shopping-kart-create.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingKartCreatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShoppingKartCreatePage]
})
export class ShoppingKartCreatePageModule {}
