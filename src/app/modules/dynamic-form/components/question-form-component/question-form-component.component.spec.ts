import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFormComponentComponent } from './question-form-component.component';

describe('QuestionFormComponentComponent', () => {
  let component: QuestionFormComponentComponent;
  let fixture: ComponentFixture<QuestionFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
