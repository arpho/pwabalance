import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';
import { CategoryModel } from 'src/app/models/shoppingCart.model';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {
  public CategoriesList: Array<CategoryModel>;

  constructor(public categories: CategoriesService) { }

  ngOnInit() {
    this.categories.getCategoriesList().on('value', eventCategoriesListSnapshot => {
      this.CategoriesList = [];
      eventCategoriesListSnapshot.forEach(snap => {
        // this.CategoriesList.push
        const category = new CategoryModel();
        category.load(snap.key,this.categories);
        this.CategoriesList.push(category);
      });
  });
}
  ionViewDidLoad() {
    console.log('loading categories')
    this.categories.getCategoriesList().on('value', eventCategoriesListSnapshot => {
      this.CategoriesList = [];
      eventCategoriesListSnapshot.forEach(snap => {
        console.log(snap.val());
      });
    });
  }

}
