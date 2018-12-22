import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';
import { CategoryModel } from 'src/app/models/CategoryModel';
import { ItemModelInterface } from 'src/app/modules/item/models/itemModelInterface';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit, OnChanges {
  public CategoriesList: Array<CategoryModel>;
  public dummyItem: ItemModelInterface;
  public filterLabel: String = 'Categorie';
  public filterString: string;
  public filterFunction: (item: ItemModelInterface) => Boolean;

  constructor(public categories: CategoriesService) { }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  searchFunctionFactory(v): (item: ItemModelInterface) => Boolean {
    const out = (item: ItemModelInterface) => item.title.toLowerCase().indexOf(v.data.toLowerCase()) !== -1;
    return out;
  }

  ngOnInit() {
    this.categories.getCategoriesList().on('value', eventCategoriesListSnapshot => {
      this.CategoriesList = [];
      this.dummyItem = new CategoryModel();
      eventCategoriesListSnapshot.forEach(snap => {
        // this.CategoriesList.push
        const category = new CategoryModel();
        category.load(snap.key, this.categories);
        this.CategoriesList.push(category);
      });
    });
  }
  ionViewDidLoad() {
    console.log('loading categories');
    this.categories.getCategoriesList().on('value', eventCategoriesListSnapshot => {
      this.CategoriesList = [];
      eventCategoriesListSnapshot.forEach(snap => {
        console.log(snap.val());
      });
    });
  }

}
