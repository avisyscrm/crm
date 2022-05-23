import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedNumbersFormComponent } from './generated-numbers-form.component';

describe('GeneratedNumbersFormComponent', () => {
  let component: GeneratedNumbersFormComponent;
  let fixture: ComponentFixture<GeneratedNumbersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratedNumbersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratedNumbersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
