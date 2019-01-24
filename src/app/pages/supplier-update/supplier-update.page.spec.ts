import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierUpdatePage } from './supplier-update.page';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { SuppliersService } from 'src/app/services/suplliers/suppliers.service';

describe('SupplierUpdatePage', () => {
  let component: SupplierUpdatePage;
  let fixture: ComponentFixture<SupplierUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierUpdatePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [SuppliersService]
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
