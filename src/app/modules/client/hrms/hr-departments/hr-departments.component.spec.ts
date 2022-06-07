import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HrDepartmentsComponent } from './hr-departments.component';

describe('HrDepartmentsComponent', () => {
  let component: HrDepartmentsComponent;
  let fixture: ComponentFixture<HrDepartmentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HrDepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
