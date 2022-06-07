import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminroleTableComponent } from './adminrole-table.component';

describe('AdminroleTableComponent', () => {
  let component: AdminroleTableComponent;
  let fixture: ComponentFixture<AdminroleTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminroleTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminroleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
