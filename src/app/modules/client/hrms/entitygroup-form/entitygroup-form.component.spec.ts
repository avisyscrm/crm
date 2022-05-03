import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitygroupFormComponent } from './entitygroup-form.component';

describe('EntitygroupFormComponent', () => {
  let component: EntitygroupFormComponent;
  let fixture: ComponentFixture<EntitygroupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitygroupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitygroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
