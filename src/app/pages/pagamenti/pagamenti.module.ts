import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ItemModule } from '../../modules/item/item.module';
import { IonicModule } from '@ionic/angular';

import { PagamentiPage } from './pagamenti.page';
import { ItemModule } from '../../modules/item/item.module';
import { ItemFieldFilterComponent } from '../../modules/item/components/item-field-filter/item-field-filter.component';

const routes: Routes = [
  {
    path: '',
    component: PagamentiPage
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
  declarations: [PagamentiPage]
})
export class PagamentiPageModule {}
