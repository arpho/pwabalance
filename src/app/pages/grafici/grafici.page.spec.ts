import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficiPage } from './grafici.page';

describe('GraficiPage', () => {
  let component: GraficiPage;
  let fixture: ComponentFixture<GraficiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
