import { Component, OnInit } from '@angular/core';
import {PaymentsService} from '../../services/payments/payments.service';
import {PaymentsModel} from '../../models/paymentModel';

@Component({
  selector: 'app-pagamenti',
  templateUrl: './pagamenti.page.html',
  styleUrls: ['./pagamenti.page.scss'],
})
export class PagamentiPage implements OnInit {
  public filterLabel: String = 'Pagamenti';
  public paymentsList = Array<PaymentsModel>();

  constructor(public payments: PaymentsService) { }

  ngOnInit() {
    this.payments.getEntitiesList().on('value', eventCategoriesListSnapshot => {
      this.paymentsList = [];
      eventCategoriesListSnapshot.forEach(snap => {
        const payment = new PaymentsModel();
        payment.load(snap.key, this.payments);
        this.paymentsList.push(payment);
      });
    });
  }

}
