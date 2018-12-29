import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { SuppliersService } from '../../services/suplliers/suppliers.service';
import { CategoryModel } from 'src/app/models/CategoryModel';
import { ItemModelInterface } from 'src/app/modules/item/models/itemModelInterface';
import { SupplierModel } from 'src/app/models/supplierModel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fornitori',
  templateUrl: './fornitori.page.html',
  styleUrls: ['./fornitori.page.scss'],
})
export class FornitoriPage implements OnInit, OnChanges {
  public SuppliersList: Array<SupplierModel>;
  public filterLabel: String = 'Categorie';
  public filterString: string;
  public filterFunction: (item: ItemModelInterface) => Boolean;

  constructor(public suppliers: SuppliersService,
    public router: Router) { }

  ngOnInit() {
    this.suppliers.getEntiesList().on('value', eventSuppliersListSnapshot => {
      this.SuppliersList = [];
      eventSuppliersListSnapshot.forEach(snap => {
        const supplier = new SupplierModel();
        supplier.load(snap.key, this.suppliers);
        this.SuppliersList.push(supplier);
      });
    });
  }


  createItem() {
    this.router.navigateByUrl(`${this.suppliers.getDummyItem().getCreatePopup()}`);
    console.log('to do ');


  }

  ngOnChanges(changes: SimpleChanges) {

  }

}
