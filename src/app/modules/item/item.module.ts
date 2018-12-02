import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item.component';
import { ItemsListComponent } from './components/items-list/items-list.component';

@NgModule({
  declarations: [ItemComponent, ItemsListComponent],
  imports: [
    CommonModule
  ],
  exports: [ItemComponent, ItemsListComponent]
})
export class ItemModule { }
