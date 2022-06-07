import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconPaymentsComponent } from './icon-payments.component';

describe('IconPaymentsComponent', () => {
  let component: IconPaymentsComponent;
  let fixture: ComponentFixture<IconPaymentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
