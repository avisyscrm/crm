import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HrActivitiesComponent } from './hr-activities.component';

describe('HrActivitiesComponent', () => {
  let component: HrActivitiesComponent;
  let fixture: ComponentFixture<HrActivitiesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HrActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
