import { Component, OnInit } from '@angular/core';
import { QuestionBase } from '../../modules/item/models/question-base';
import { TextboxQuestion } from '../../modules/item/models/question-textbox';
import { SwitchQuestion } from '../../modules/item/models/question-switch';
import { GeoLocateQuestion } from '../../modules/dynamic-form/models/question-geolocate';
import { Coordinates } from '../../modules/geo-location/models/coordinates';
import { ActivatedRoute, Router } from '@angular/router';
import { SuppliersService } from '../../services/suplliers/suppliers.service';
import { AlertController } from '@ionic/angular';
import { SupplierModel } from 'src/app/models/supplierModel';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-supplier-update',
  templateUrl: '../supplier-create/supplier-create.page.html',
  styleUrls: ['../supplier-create/supplier-create.page.scss'],
})
export class SupplierUpdatePage implements OnInit {
  public questions: any;
  public supplier_key: string;
  public currentSupplier: SupplierModel;
  public initialLocation: Coordinates;
  public showSpinner = false;
  public title = '';

  constructor(
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    private route: ActivatedRoute,
    public Suppliers: SuppliersService,
    public router: Router,
    public location: Location) {


    this.initialLocation = new Coordinates({
      latitude: 0, // I have to set a value for the form 
      longitude: 0, //  means no locatian set
      address: 'to be implemented yet'
    });


    const questions: QuestionBase<any>[] = [

      /* new DropdownQuestion({
         key: 'brave',
         label: 'Bravery Rating',
         options: [
           {key: 'solid',  value: 'Solid'},
           {key: 'great',  value: 'Great'},
           {key: 'good',   value: 'Good'},
           {key: 'unproven', value: 'Unproven'}
         ],
         order: 3
       }),*/

      new TextboxQuestion({
        key: 'title',
        label: 'Nome del Fornitore',
        value: 'Bombasto',
        required: true,
        order: 1
      }),
      new SwitchQuestion({
        key: 'ecommerce',
        label: 'venditore online',
        labelTrue: 'venditore fa ecommerce',
        labelFalse: ' venditore tradizionale',
        value: true,
        required: false,
        order: 3
      }),
      new GeoLocateQuestion({
        key: 'location',
        label: 'coordinate',
        required: false,
        order: 4
      })

    ];
    this.questions = questions.sort((a, b) => a.order - b.order);
  }


  ngOnInit() {

    const supplier_key = this.route.snapshot.paramMap.get('key');
    this.currentSupplier = new SupplierModel();
    this.currentSupplier.load(supplier_key, this.Suppliers);
    this.title = `modifca ${this.currentSupplier.title}`;
    this.questions =

      [

        new TextboxQuestion({
          key: 'title',
          label: 'Nome del Fornitore',
          value: this.currentSupplier.title,
          required: true,
          order: 1
        }),
        new TextboxQuestion({
          key: 'note',
          label: 'note',
          value: this.currentSupplier.note,
          required: false,
          order: 2
        }),
        new SwitchQuestion({
          key: 'ecommerce',
          label: 'venditore online',
          labelTrue: 'venditore fa ecommerce',
          labelFalse: ' venditore tradizionale',
          value: this.currentSupplier.ecommerce,
          required: false,
          order: 3
        }),
        new GeoLocateQuestion({
          key: 'location',
          label: 'coordinate',
          required: false,
          value: new Coordinates({
            latitude: Number(this.currentSupplier.latitude),
            longitude: Number(this.currentSupplier.longitude),
            address: this.currentSupplier.address || this.currentSupplier.indirizzo
          }),
          order: 4
        })

      ].sort((a, b) => a.order - b.order);

  }



  filter(ev: {}) {
    console.log(ev)
  }

  async  submit(ev: {
    nome: string,
    note: string,
    title?: string,
    fidelity_card?: string,
    location: {
      address: string,
      latitude: number,
      longitude: number,
    }
    altitude: string,
    key: string,
    ecommerce: boolean,

  }) {
    this.showSpinner = true;
    // console.log('submitted', ev);
    const supplier = new SupplierModel(ev);
    console.log('fornitore non modificato', this.currentSupplier);
    console.log('location', ev['location']);
    supplier.address = ev['location']['address'] || supplier.address;
    supplier.longitude = ev['location']['longitude'] || supplier.longitude;
    supplier.latitude = ev['location']['latitude'] || supplier.latitude;
    supplier.key = this.currentSupplier.key;
    console.log('nuovo fornitore', supplier);
    console.log('fornitore serialized', supplier.serialize());
    this.Suppliers.updateItem(supplier).then(async (item) => {
      this.showSpinner = false;
      const toast = await this.toastCtrl.create({
        message: 'fornitore modificato correttamente',
        duration: 3000,
        position: 'top'
      });
      toast.present();
      this.location.back();
    });
  }


}
