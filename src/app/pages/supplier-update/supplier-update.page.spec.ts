import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierUpdatePage } from './supplier-update.page';
import { IonicModule } from '@ionic/angular';

describe('SupplierUpdatePage', () => {
  let component: SupplierUpdatePage;
  let fixture: ComponentFixture<SupplierUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierUpdatePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
