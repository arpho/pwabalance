import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CategoriePage } from './categorie.page';
import {ItemModule} from '../../modules/item/item.module';

const routes: Routes = [
  {
    path: '',
    component: CategoriePage
  }
];

@NgModule({
  imports: [
    ItemModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CategoriePage]
})
export class CategoriePageModule {}
