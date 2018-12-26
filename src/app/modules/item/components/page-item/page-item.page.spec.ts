import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageItemPage } from './page-item.page';

describe('PageItemPage', () => {
  let component: PageItemPage;
  let fixture: ComponentFixture<PageItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
