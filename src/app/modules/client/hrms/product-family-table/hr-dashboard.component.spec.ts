import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrDashboardComponent } from './hr-dashboard.component';

describe('HrDashboardComponent', () => {
  let component: HrDashboardComponent;
  let fixture: ComponentFixture<HrDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
