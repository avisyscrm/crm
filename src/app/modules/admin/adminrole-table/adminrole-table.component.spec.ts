import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminroleTableComponent } from './adminrole-table.component';

describe('AdminroleTableComponent', () => {
  let component: AdminroleTableComponent;
  let fixture: ComponentFixture<AdminroleTableComponent>;

  beforeEach(async(() => {
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
