import { Component, OnInit } from '@angular/core';
import { QuestionBase } from '../../modules/item/models/question-base';
import { TextboxQuestion } from '../../modules/item/models/question-textbox';
import { SwitchQuestion } from '../../modules/item/models/question-switch';
import { GeoLocateQuestion } from '../../modules/dynamic-form/models/question-geolocate';
import { Coordinates } from '../../modules/geo-location/models/coordinates';
import { SupplierModel } from 'src/app/models/supplierModel';
import { SuppliersService } from 'src/app/services/suplliers/suppliers.service';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.page.html',
  styleUrls: ['./supplier-create.page.scss'],
})
export class SupplierCreatePage implements OnInit {
  public questions: any;
  public initialLocation: Coordinates;
  public showSpinner = false;
  public title = 'Nuovo fornitore';


  constructor(public Suppliers: SuppliersService,
    public location: Location,
    public toastCtrl: ToastController) {


    this.initialLocation = new Coordinates({
      latitude: 0, // I have to set a value for the form
      longitude: 0, //  means no locatian set
      address: 'to be implemented'
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
        // value: 'Bombasto',
        required: true,
        order: 1
      }),
      new SwitchQuestion({
        key: 'ecommerce',
        label: 'venditore online',
        labelTrue: 'venditore fa ecommerce',
        labelFalse: ' venditore tradizionale',
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
  }
  filter(ev: {}) {
  }

  setForm(ev: {}) {
  }

  submit(ev: {
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
    const supplier = new SupplierModel(ev);
    supplier.address = ev['location']['address'];
    this.Suppliers.createItem(supplier).then(async item => {
      console.log('created', item, item.key);
      this.showSpinner = false;
      const toast = await this.toastCtrl.create({
        message: `fornitore ${supplier.title} creato correttamente`,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      this.location.back();
    });

  }
}
