import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornitoriPage } from './fornitori.page';
import { DistanceSorterPipe } from 'src/app/modules/geo-location/pipes/distance-sorter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('FornitoriPage', () => {
  let component: FornitoriPage;
  let fixture: ComponentFixture<FornitoriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FornitoriPage, DistanceSorterPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientModule, RouterModule, RouterTestingModule],
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
