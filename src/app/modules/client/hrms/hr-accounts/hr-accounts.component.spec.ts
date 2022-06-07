import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HrAccountsComponent } from './hr-accounts.component';

describe('HrAccountsComponent', () => {
  let component: HrAccountsComponent;
  let fixture: ComponentFixture<HrAccountsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HrAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
