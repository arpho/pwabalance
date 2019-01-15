import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { GeoLocalizeComponent } from './geo-localize.component';
import { AgmCoreModule } from '@agm/core';

describe('GeoLocalizeComponent', () => {
  let component: GeoLocalizeComponent;
  let fixture: ComponentFixture<GeoLocalizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GeoLocalizeComponent],
      imports: [IonicModule, AgmCoreModule]
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
