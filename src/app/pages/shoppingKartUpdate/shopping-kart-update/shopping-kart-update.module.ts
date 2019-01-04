import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShoppingKartUpdatePage } from './shopping-kart-update.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingKartUpdatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShoppingKartUpdatePage]
})
export class ShoppingKartUpdatePageModule {}
