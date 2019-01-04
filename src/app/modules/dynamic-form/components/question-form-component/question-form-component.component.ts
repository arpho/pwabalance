import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy, ɵConsole } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../../models/question-base';

@Component({
  selector: 'app-question',
  templateUrl: './question-form-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionFormComponent implements OnInit {
  public value: any;
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  ngOnInit() {
    this.value = this.question.value;
    console.log('nel question componenr', this.value)
  }
  get isValid() { return this.form.controls[this.question.key].valid; }
  get getValue() {
    return this.form.get(this.question.key).value;
  }
}
