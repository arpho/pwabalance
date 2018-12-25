import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../../services/payments/payments.service';
import { PaymentsModel } from '../../models/paymentModel';
import { ItemModelInterface } from '../../modules/item/models/itemModelInterface';

@Component({
  selector: 'app-pagamenti',
  templateUrl: './pagamenti.page.html',
  styleUrls: ['./pagamenti.page.scss'],
})
export class PagamentiPage implements OnInit {
  public filterLabel0: String = 'filtra nome';
  public filterLabel1: String = ' filtra nota';
  public paymentsList = Array<PaymentsModel>();

  public filterFunction: (item: ItemModelInterface) => Boolean;
  constructor(public payments: PaymentsService) { }

  searchFunctionFactory(event) {
    const filterTitle = event.title ?
      (item: ItemModelInterface) => item.title.toLowerCase().indexOf(event.title.data.toLowerCase()) !== -1 :
      (item: ItemModelInterface) => true; // se non filtro il campo title prendo tutto
    const filterNote = event.note ? (item: ItemModelInterface) => item.note.toLowerCase().indexOf(event.note.data.toLowerCase()) !== -1 :
      (item: ItemModelInterface) => true;
    const out = (item: ItemModelInterface) => filterNote(item) && filterTitle(item);
    return out;
  }

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
