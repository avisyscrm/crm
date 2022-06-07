import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HrEventsComponent } from './hr-events.component';

describe('HrEventsComponent', () => {
  let component: HrEventsComponent;
  let fixture: ComponentFixture<HrEventsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HrEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
