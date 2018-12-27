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
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { QuestionControlService } from './services/question-control.service';
import { QuestionFormComponent } from './components/question-form-component/question-form-component.component'

@NgModule({
  declarations: [
    ItemComponent,
    ItemsListComponent,
    ItemFieldFilterComponent,
    FilterItemsPipe,
    PageItemComponent,
    PageItemsListComponent,
    QuestionFormComponent,
    DynamicFormComponent,
  ],
  imports: [
    CommonModule,

    IonicModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    QuestionControlService],
  exports: [ItemComponent,
    ItemsListComponent,
    ItemFieldFilterComponent,
    PageItemComponent,
    PageItemsListComponent,
    QuestionFormComponent,
    DynamicFormComponent
  ]
})
export class ItemModule { }
