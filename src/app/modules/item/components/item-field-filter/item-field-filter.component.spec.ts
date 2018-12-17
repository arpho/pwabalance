import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFieldFilterComponent } from './item-field-filter.component';

describe('ItemFieldFilterComponent', () => {
  let component: ItemFieldFilterComponent;
  let fixture: ComponentFixture<ItemFieldFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemFieldFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFieldFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
