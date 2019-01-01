import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../../models/question-base';
import { QuestionControlService } from '../../services/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [QuestionControlService],
})
export class DynamicFormComponent implements OnInit {
  @Output() interactiveSubmit: EventEmitter<{}> = new EventEmitter();
  @Output() singleSubmit: EventEmitter<{}> = new EventEmitter();
  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {
  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    this.form.valueChanges.subscribe(v => {
      console.log(v);
      this.interactiveSubmit.emit(v);
    });
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    this.singleSubmit.emit(this.form.value);
  }
}
