import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ItemInterface } from '../../models/itemInterface';

@Component({
  selector: 'my-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit, OnChanges {
  @Input() items_list: ItemInterface[];


  constructor() { }

  ngOnInit() {
    console.log(this.items_list);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.items_list = changes.items_list.currentValue;

  }

}
