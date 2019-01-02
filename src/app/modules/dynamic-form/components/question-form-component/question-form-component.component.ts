import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../../models/question-base';

@Component({
  selector: 'app-question',
  templateUrl: './question-form-component.html'
})
export class QuestionFormComponent implements OnInit {
  public value: any;
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  ngOnInit() {
    this.value = this.question.value;
  }
  get isValid() { return this.form.controls[this.question.key].valid; }
  get getValue() {
    return this.form.get(this.question.key).value;
  }
}
