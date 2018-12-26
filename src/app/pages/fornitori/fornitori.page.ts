import { Component, OnInit, Onchanges, OnChanges, SimpleChanges } from '@angular/core';
import { SuppliersService } from '../../services/suplliers/suppliers.service';
import { CategoryModel } from 'src/app/models/CategoryModel';
import { ItemModelInterface } from 'src/app/modules/item/models/itemModelInterface';
import { SupplierModel } from 'src/app/models/supplierModel';

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

  constructor(public suppliers: SuppliersService) { }

  ngOnInit() {
    this.suppliers.getEntiesList().on('value', eventSuppliersListSnapshot => {
      this.SuppliersList = [];
      eventSuppliersListSnapshot.forEach(snap => {
        const supplier = new SupplierModel();
        supplier.load(snap.key, this.suppliers);
        console.log(supplier);
        this.SuppliersList.push(supplier);
      });
    });
  }

  ngOnChanges(changes: SimpleChanges) {

  }

}
