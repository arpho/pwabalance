import { Component, OnInit } from '@angular/core';
import { QuestionBase } from '../../modules/item/models/question-base';
import { TextboxQuestion } from '../../modules/item/models/question-textbox';
import { SwitchQuestion } from '../../modules/item/models/question-switch';
import { GeoLocateQuestion } from '../../modules/dynamic-form/models/question-geolocate';
import { Coordinates } from '../../modules/geo-location/models/coordinates';


@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.page.html',
  styleUrls: ['./supplier-create.page.scss'],
})
export class SupplierCreatePage implements OnInit {
  public questions: any;
  public initialLocation: Coordinates;

  constructor() {


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
      new TextboxQuestion({
        key: 'indirizzo',
        label: 'indirizzo',
        // value: 'Bombasto',
        required: false,
        order: 2
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
  }
  filter(ev: {}) {
    console.log('filter', ev);
  }

  submit(ev: {}) {
    console.log('submitted', ev)
  }
}
