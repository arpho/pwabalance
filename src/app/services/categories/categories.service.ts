import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { CategoryModel } from '../../models/CategoryModel';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  public categoriesListRef: firebase.database.Reference;
  public eventListRef: firebase.database.Reference;

  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.categoriesListRef = firebase.database().ref(`/categorie/${user.uid}/`);
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

  getCategory(prId: string): firebase.database.Reference {
    return this.categoriesListRef.child(prId);
  }

  updatePr(category: CategoryModel) {
    return this.categoriesListRef.child(category.id).update(category);
  }

}
