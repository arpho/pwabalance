import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { SuppliersService } from '../../services/suplliers/suppliers.service';
import { CategoryModel } from 'src/app/models/CategoryModel';
import { ItemModelInterface } from 'src/app/modules/item/models/itemModelInterface';
import { SupplierModel } from 'src/app/models/supplierModel';
import { Router } from '@angular/router';
import { GeoService } from '../../modules/geo-location/services/geo-service'


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
  public position = {};

  constructor(
    public suppliers: SuppliersService,
    public geo: GeoService,
    public router: Router) {

  }

  async ngOnInit() {
    this.geo.getPosition().then(coords => {
      this.position = { latitude: coords.coords.latitude, longitude: coords.coords.longitude };


      console.log('fallback', this.position);
    });
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
