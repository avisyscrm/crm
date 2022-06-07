import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ForgotPassFormComponent } from './forgot-pass-form.component';

describe('ForgotPassFormComponent', () => {
  let component: ForgotPassFormComponent;
  let fixture: ComponentFixture<ForgotPassFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPassFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
