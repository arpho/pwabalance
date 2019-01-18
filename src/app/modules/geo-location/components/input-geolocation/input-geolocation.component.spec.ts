import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGeolocationComponent } from './input-geolocation.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

describe('InputGeolocationComponent', () => {
  let component: InputGeolocationComponent;
  let fixture: ComponentFixture<InputGeolocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputGeolocationComponent],
      imports: [IonicModule, HttpClientModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputGeolocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
