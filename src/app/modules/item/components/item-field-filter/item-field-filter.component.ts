
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder, AbstractControl } from '@angular/forms';
import { Refresher } from '@ionic/angular';


@Component({
  selector: 'app-item-field-filter',
  templateUrl: './item-field-filter.component.html',
  styleUrls: ['./item-field-filter.component.scss']
})
export class ItemFieldFilterComponent {
  public field;
  @Input() label: string;
  @Output() doFilter: EventEmitter<any>;
  @Output() selected: EventEmitter<string> = new EventEmitter<string>();
  filterForm: FormGroup;


  constructor(
    fb: FormBuilder) {
    this.field = new FormControl('');
    this.filterForm = fb.group({
      'field': [this.label, Validators.required]
    });
    this.field = this.filterForm.controls['field'];
    this.doFilter = new EventEmitter<string>();
    this.field.valueChanges.subscribe(
      (value: string) => {
        this.doFilter.emit({ data: value });
      });


  }


  refresh() {
    this.filterForm.controls.field.setValue('');
  }
}
