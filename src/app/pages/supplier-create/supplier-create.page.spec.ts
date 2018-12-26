import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierCreatePage } from './supplier-create.page';

describe('SupplierCreatePage', () => {
  let component: SupplierCreatePage;
  let fixture: ComponentFixture<SupplierCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
