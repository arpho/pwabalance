import { Component, OnInit } from '@angular/core';
import { QuestionBase } from '../../modules/item/models/question-base';
import { TextboxQuestion } from '../../modules/item/models/question-textbox';
import { DropdownQuestion } from '../../modules/item/models/question-dropdown';
import { SwitchQuestion } from '../../modules/item/models/question-switch';


@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.page.html',
  styleUrls: ['./supplier-create.page.scss'],
})
export class SupplierCreatePage implements OnInit {
  public questions: any;

  constructor() {
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
      new TextboxQuestion({
        key: 'indirizzo',
        label: 'indirizzo',
        value: 'Bombasto',
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
      })

    ];
    this.questions = questions.sort((a, b) => a.order - b.order);
  }



  ngOnInit() {
  }

}
