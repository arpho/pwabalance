import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ItemInterface } from '../../models/itemInterface';
import { AlertController } from '@ionic/angular';
import { ItemServiceInterface } from '../../models/ItemServiceInterface';

@Component({
  selector: 'my-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit, OnChanges {
  @Input() items_list: ItemInterface[];
  @Input() service: ItemServiceInterface;


  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.items_list = changes.items_list.currentValue;
    if (this.items_list) {
    }

  }


  async do(item: ItemInterface) {

    console.log(item.serialize());
    const popup = item.getPopup(item, this.service);
    const alert = await this.alertCtrl.create(popup);
    await alert.present();
  }

}
