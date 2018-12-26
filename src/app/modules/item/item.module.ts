import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ItemComponent } from './components/item/item.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { FilterItemsPipe } from './pipes/filter-items.pipe';
import { ItemFieldFilterComponent } from './components/item-field-filter/item-field-filter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ItemComponent, ItemsListComponent, ItemFieldFilterComponent, FilterItemsPipe,],
  imports: [
    CommonModule,

    IonicModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [ItemComponent, ItemsListComponent, ItemFieldFilterComponent]
})
export class ItemModule { }
