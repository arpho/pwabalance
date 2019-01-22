import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavController, } from '@ionic/angular';
import { SupplierCreatePage } from './supplier-create.page';
import { ToastController } from '@ionic/angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { Location, LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';

describe('SupplierCreatePage', () => {
  let component: SupplierCreatePage;
  let fixture: ComponentFixture<SupplierCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierCreatePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [NavController, Location, { provide: LocationStrategy, useClass: PathLocationStrategy, ToastController },
        { provide: APP_BASE_HREF, useValue: '/my/app' }],
      imports: [IonicModule.forRoot()]
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
