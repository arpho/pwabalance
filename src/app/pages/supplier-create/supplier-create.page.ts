import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {QuestionBase} from '../../modules/item/models/question-base';
import {TextboxQuestion} from '../../modules/item/models/question-textbox';
import {DropdownQuestion} from '../../modules/item/models/question-dropdown';


@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.page.html',
  styleUrls: ['./supplier-create.page.scss'],
})
export class SupplierCreatePage implements OnInit {
  public questions: any;

  constructor() {
    const questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];
    this.questions = questions.sort((a, b) => a.order - b.order);
  }

  ngOnInit() {
  }

}
