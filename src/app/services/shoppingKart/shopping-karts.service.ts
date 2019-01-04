import { Injectable } from '@angular/core';
import { ItemServiceInterface } from '../../modules/item/models/ItemServiceInterface';
import { ItemModelInterface } from '../../modules/item/models/itemModelInterface';
import { ShoppingKartModel } from '../../models/shoppingKartModel';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ShoppingKartsService implements ItemServiceInterface {
  private shoppingKartsListRef: firebase.database.Reference;
  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.shoppingKartsListRef = firebase.database().ref(`/acquisti/${user.uid}/`);
      }
    });

  }


  getItem(key: string) {
    return this.shoppingKartsListRef.child(key);
  }


  updateItem(item: ItemModelInterface) {
    return this.shoppingKartsListRef.child(item.key).update(item.serialize());
  }

  deleteItem(key: string) {
    return this.shoppingKartsListRef.child(key).remove();
  }
  createItem(item: ItemModelInterface) {
    return this.shoppingKartsListRef.push(item.serialize());
  }

  getEntitiesList() {
    return this.shoppingKartsListRef;
  }

  getDummyItem() {
    return new ShoppingKartModel();
  }
}
