import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRoleComponent } from './dynamic-role.component';

describe('DynamicRoleComponent', () => {
  let component: DynamicRoleComponent;
  let fixture: ComponentFixture<DynamicRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
