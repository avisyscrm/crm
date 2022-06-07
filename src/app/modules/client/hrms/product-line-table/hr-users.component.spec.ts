import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HrUsersComponent } from './hr-users.component';

describe('HrUsersComponent', () => {
  let component: HrUsersComponent;
  let fixture: ComponentFixture<HrUsersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HrUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
