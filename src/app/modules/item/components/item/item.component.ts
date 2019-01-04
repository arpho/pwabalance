import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ItemModelInterface } from '../../models/itemModelInterface';

@Component({
  selector: 'my-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() Item: ItemModelInterface;
  constructor(private alertCtrl: AlertController) { }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit() {
  }

}
