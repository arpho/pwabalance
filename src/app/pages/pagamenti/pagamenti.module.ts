import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ItemModule } from '../../modules/item/item.module';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { PagamentiPage } from './pagamenti.page';

const routes: Routes = [
  {
    path: '',
    component: PagamentiPage
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
  declarations: [PagamentiPage]
})
export class PagamentiPageModule { }
