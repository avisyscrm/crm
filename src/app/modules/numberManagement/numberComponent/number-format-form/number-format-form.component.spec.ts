import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NumberFormatFormComponent } from './number-format-form.component';

describe('NumberFormatFormComponent', () => {
  let component: NumberFormatFormComponent;
  let fixture: ComponentFixture<NumberFormatFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberFormatFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberFormatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
