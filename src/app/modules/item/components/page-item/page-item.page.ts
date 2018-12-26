import { Component, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { AlertController } from '@ionic/angular';
import { ItemModelInterface } from '../../models/itemModelInterface';

@Component({
  selector: 'app-page-item',
  templateUrl: './page-item.page.html',
  styleUrls: ['./page-item.page.scss'],
})
export class PageItemPage extends ItemComponent implements OnInit {

  constructor(alertCtrl: AlertController) {
    super(alertCtrl);
  }

  ngOnInit() {
  }

}
