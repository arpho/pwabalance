import { Injectable } from '@angular/core';
import { ItemServiceInterface } from '../../modules/item/models/ItemServiceInterface';
import {ItemModelInterface} from '../../modules/item/models/itemModelInterface';
import { PaymentsModel } from '../../models/paymentModel';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService implements ItemServiceInterface {

  public paymentsListRef: firebase.database.Reference;
  public eventListRef: firebase.database.Reference;
  getDummyItem() {
    return new PaymentsModel();

  }

  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.paymentsListRef = firebase.database().ref(`/pagamenti/${user.uid}/`);
      }
    });
   }


  getEntitiesList(): firebase.database.Reference {
    return this.paymentsListRef;
  }

  getEventDetail(eventId: string): firebase.database.Reference {
    return this.eventListRef.child(eventId);
  }

  getItem(prId: string): firebase.database.Reference {
    return this.paymentsListRef.child(prId);
  }

  updateItem(item: ItemModelInterface) {
    return this.paymentsListRef.child(item.key).update(item.serialize());
  }
  deleteItem(key: string) {
    return this.paymentsListRef.child(key).remove();
  }

}
