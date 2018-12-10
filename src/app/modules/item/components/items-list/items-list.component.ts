import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { ItemModelInterface } from '../../models/itemModelInterface';
import { AlertController } from '@ionic/angular';
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


  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.items_list = changes.items_list.currentValue;
    if (this.items_list) {
    }

  }


  async do(item: ItemModelInterface) {

    const popup = item.getPopup(item, this.service);
    const alert = await this.alertCtrl.create(popup);
    await alert.present();


  }

}
