import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-field-filter',
  templateUrl: './field-filter.component.html',
  styleUrls: ['./field-filter.component.scss']
})
export class FieldFilterComponent implements OnInit {
  field = new FormControl('').registerOnChange((v) => { console.log(v); });
  @Input() label: string;

  constructor() {
  }

  ngOnInit() {
  }

}
