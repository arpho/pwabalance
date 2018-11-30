import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { CategoryModel } from '../../models/shoppingCart.model';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  public categoriesListRef: firebase.database.Reference;
  public eventListRef: firebase.database.Reference;

  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      console.log('user',user.uid, firebase);
      firebase.database().ref(`categorie/${user.uid}`);
      if (user) {
        this.categoriesListRef = firebase
          .database()
          .ref(`/categorie/${user.uid}/`);
      }
    });
  }

  createCategory(
    eventName: string,
    eventDate: Date,
    eventPrice: number,
    eventCost: number
  ): firebase.database.ThenableReference {
    return this.eventListRef.push({
      name: eventName,
      date: eventDate.toDateString(),
      price: eventPrice * 1,
      cost: eventCost * 1,
      revenue: eventCost * -1,
    });
  }/*
  createPr(pr: PrModel): firebase.database.ThenableReference {
    console.log('creating pr', pr);
    return this.categoriesListRef.push(pr);
  }
*/
  getCategoriesList(): firebase.database.Reference {
    return this.categoriesListRef;
  }

  getEventDetail(eventId: string): firebase.database.Reference {
    return this.eventListRef.child(eventId);
  }

  getPr(prId: string): firebase.database.Reference {
    return this.categoriesListRef.child(prId);
  }

  updatePr(category: CategoryModel) {
    return this.categoriesListRef.child(category.id).update(category);
  }

}
