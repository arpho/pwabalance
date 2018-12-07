import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ItemInterface } from '../../models/itemInterface';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'my-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit, OnChanges {
  @Input() items_list: ItemInterface[];


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
    console.log(item)

    const alert = await this.alertCtrl.create({
      subHeader: 'modifica categoria',
      inputs: [
        {
          type: 'text',
          name: 'title',
          placeholder: 'categoria',
          value: item.title,
        },
      ],
      buttons: [
        { text: 'Annulla' },
        {
          text: 'Salva',
          handler: data => {
            console.log('chiouso', data)
            item.title = data.title;
            console.log(item)
          },
        },
      ],
    });
    await alert.present();
  }

}
