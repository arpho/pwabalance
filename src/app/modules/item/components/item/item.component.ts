import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ItemInterface } from '../../models/itemInterface';

@Component({
  selector: 'my-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() Item: ItemInterface;
  constructor(private alertCtrl: AlertController) { }

  ngOnChanges(changes: SimpleChanges) {
  }
  async do() {
    const alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
   await alert.present();
  }

  ngOnInit() {
  }

}
