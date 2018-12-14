import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldFilterComponent } from './field-filter.component';

describe('FieldFilterComponent', () => {
  let component: FieldFilterComponent;
  let fixture: ComponentFixture<FieldFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
