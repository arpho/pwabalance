import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CategoriePage } from './categorie.page';
import { ItemModule } from '../../modules/item/item.module';
import { ItemFieldFilterComponent } from '../../modules/item/components/item-field-filter/item-field-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormModule } from 'src/app/modules/dynamic-form/dynamic-form.module';


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
    RouterModule.forChild(routes),
    DynamicFormModule
  ],
  declarations: [CategoriePage,
  ]
})
export class CategoriePageModule { }
