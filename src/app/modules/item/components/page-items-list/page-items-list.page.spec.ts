import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageItemsListPage } from './page-items-list.page';

describe('PageItemsListPage', () => {
  let component: PageItemsListPage;
  let fixture: ComponentFixture<PageItemsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageItemsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageItemsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
