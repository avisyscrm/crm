import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HrHolidaysComponent } from './hr-holidays.component';

describe('HrHolidaysComponent', () => {
  let component: HrHolidaysComponent;
  let fixture: ComponentFixture<HrHolidaysComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HrHolidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
