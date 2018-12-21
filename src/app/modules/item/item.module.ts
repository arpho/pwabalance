import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ItemComponent } from './components/item/item.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { FilterItemsPipe } from './pipes/filter-items.pipe';

@NgModule({
  declarations: [ItemComponent, ItemsListComponent, FilterItemsPipe],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  exports: [ItemComponent, ItemsListComponent]
})
export class ItemModule { }
