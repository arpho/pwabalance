import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { ItemModelInterface } from '../../models/itemModelInterface';
import { AlertController, Item } from '@ionic/angular';
import { ItemServiceInterface } from '../../models/ItemServiceInterface';

@Component({
  selector: 'my-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsListComponent implements OnInit, OnChanges {
  @Input() items_list: ItemModelInterface[];
  @Input() service: ItemServiceInterface;
  dummyItem: ItemModelInterface;
  @Input() filterFunction: (item: ItemModelInterface) => boolean;


  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
    this.filterFunction = (v: ItemModelInterface) => true;
    this.dummyItem = this.service.getDummyItem();
  }


  async deleteItem(item: ItemModelInterface) {
    const element = this.service.getDummyItem().getElement();
    const alert = await this.alertCtrl.create({
      message: ` vuoi deavero cancellare quest${element.genere} ${element.element}?(${item.title})`,
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Cancella',
          handler: () => {
            console.log('delete clicked');
            // this.service.deleteItem(item.key);
          }
        }
      ]
    });
    await alert.present();
  }

  async showFilter() {
    console.log('filtering');
    const next = (filterFunction: (item: ItemModelInterface) => boolean) => {
      this.filterFunction = filterFunction;
      console.log('got filterFunction', this.filterFunction);
    };

    const popup = this.dummyItem.getFilterPopup(next);
    const alert = await this.alertCtrl.create(popup);
    await alert.present();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.items_list) {
      this.items_list = changes.items_list.currentValue;
    }
    if (changes.filterFunction) {
      this.filterFunction = changes.filterFunction.currentValue;
    }

  }

  countItems() {
    return (this.items_list) ? this.items_list.filter(this.filterFunction).length : 'loading';
  }

  async do(item: ItemModelInterface) {

    const popup = item.getPopup(item, this.service);
    const alert = await this.alertCtrl.create(popup);
    await alert.present();


  }

}
