import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CategoriePage } from './categorie.page';
import { ItemModule } from '../../modules/item/item.module';
import { FieldFilterComponent } from '../../components/field-filter/field-filter.component';
import { ItemFieldFilterComponent } from '../../modules/item/components/item-field-filter/item-field-filter.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CategoriePage
  }
];

@NgModule({
  imports: [

    ReactiveFormsModule,
    ItemModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CategoriePage, ItemFieldFilterComponent, 
    FieldFilterComponent]
})
export class CategoriePageModule { }
