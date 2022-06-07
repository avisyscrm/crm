import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EntityGroupsComponent } from './entity-groups.component';

describe('EntityGroupsComponent', () => {
  let component: EntityGroupsComponent;
  let fixture: ComponentFixture<EntityGroupsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
