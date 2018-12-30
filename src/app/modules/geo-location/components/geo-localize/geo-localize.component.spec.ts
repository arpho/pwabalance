import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoLocalizeComponent } from './geo-localize.component';

describe('GeoLocalizeComponent', () => {
  let component: GeoLocalizeComponent;
  let fixture: ComponentFixture<GeoLocalizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoLocalizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoLocalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
