import { Component, OnInit } from '@angular/core';
import { AlertController, Item } from '@ionic/angular';
import { ItemsListComponent } from '../items-list/items-list.component';

@Component({
  selector: 'app-page-items-list',
  templateUrl: './page-items-list.page.html',
  styleUrls: ['./page-items-list.page.scss'],
})
export class PageItemsListPage extends ItemsListComponent implements OnInit {

  constructor(alertCtrl: AlertController) {
    super(alertCtrl);
  }

  ngOnInit() {
  }

}
