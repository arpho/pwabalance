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

  ngOnInit() {
  }

}
