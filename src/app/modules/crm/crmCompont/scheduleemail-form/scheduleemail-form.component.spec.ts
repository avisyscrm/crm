import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleemailFormComponent } from './scheduleemail-form.component';

describe('ScheduleemailFormComponent', () => {
  let component: ScheduleemailFormComponent;
  let fixture: ComponentFixture<ScheduleemailFormComponent>;

  beforeEach(async(() => {
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
