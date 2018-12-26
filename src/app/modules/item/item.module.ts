import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ItemComponent } from './components/item/item.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { FilterItemsPipe } from './pipes/filter-items.pipe';
import { ItemFieldFilterComponent } from './components/item-field-filter/item-field-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageItemComponent } from './components/page-item/page-item.component';
import { PageItemsListComponent } from './components/page-items-list/page-items-list.page';

@NgModule({
  declarations: [ItemComponent, ItemsListComponent, ItemFieldFilterComponent, FilterItemsPipe, PageItemComponent, PageItemsListComponent],
  imports: [
    CommonModule,

    IonicModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [ItemComponent, ItemsListComponent, ItemFieldFilterComponent, PageItemComponent, PageItemsListComponent]
})
export class ItemModule { }
