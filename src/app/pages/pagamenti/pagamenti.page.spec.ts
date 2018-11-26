import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentiPage } from './pagamenti.page';

describe('PagamentiPage', () => {
  let component: PagamentiPage;
  let fixture: ComponentFixture<PagamentiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
