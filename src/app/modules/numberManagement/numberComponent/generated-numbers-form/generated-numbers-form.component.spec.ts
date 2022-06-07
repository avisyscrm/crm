import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GeneratedNumbersFormComponent } from './generated-numbers-form.component';

describe('GeneratedNumbersFormComponent', () => {
  let component: GeneratedNumbersFormComponent;
  let fixture: ComponentFixture<GeneratedNumbersFormComponent>;

  beforeEach(waitForAsync(() => {
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
