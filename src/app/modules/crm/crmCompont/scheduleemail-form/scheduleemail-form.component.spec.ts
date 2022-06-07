import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScheduleemailFormComponent } from './scheduleemail-form.component';

describe('ScheduleemailFormComponent', () => {
  let component: ScheduleemailFormComponent;
  let fixture: ComponentFixture<ScheduleemailFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleemailFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleemailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
