import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingKartCreatePage } from './shopping-kart-create.page';

describe('ShoppingKartCreatePage', () => {
  let component: ShoppingKartCreatePage;
  let fixture: ComponentFixture<ShoppingKartCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingKartCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingKartCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
