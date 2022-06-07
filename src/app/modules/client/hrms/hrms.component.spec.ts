import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HRMSComponent } from './hrms.component';

describe('HRMSComponent', () => {
  let component: HRMSComponent;
  let fixture: ComponentFixture<HRMSComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HRMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HRMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
