import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornitoriPage } from './fornitori.page';

describe('FornitoriPage', () => {
  let component: FornitoriPage;
  let fixture: ComponentFixture<FornitoriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornitoriPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornitoriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
