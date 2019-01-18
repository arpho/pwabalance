import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FilterItemsPipe } from '../../pipes/filter-items.pipe';
import { MyItemModule } from './item.component';
import { ItemModule } from '../../item.module';

describe('MyItemModule', () => {
  let component: MyItemModule;
  let fixture: ComponentFixture<MyItemModule>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyItemModule, FilterItemsPipe],
      imports: [IonicModule, ItemModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyItemModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
