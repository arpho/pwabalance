import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ItemModule } from '../../modules/item/item.module';

import { FornitoriPage } from './fornitori.page';

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
    ItemModule
  ],
  declarations: [FornitoriPage]
})
export class FornitoriPageModule {}
