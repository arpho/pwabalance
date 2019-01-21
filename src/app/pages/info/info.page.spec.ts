import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPage } from './info.page';
import { HttpClientModule } from '@angular/common/http';

describe('InfoPage', () => {
  let component: InfoPage;
  let fixture: ComponentFixture<InfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfoPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
