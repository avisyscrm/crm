import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrDashboardComponent } from './pr-dashboard.component';

describe('PrDashboardComponent', () => {
  let component: PrDashboardComponent;
  let fixture: ComponentFixture<PrDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
