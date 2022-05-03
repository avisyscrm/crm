import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLeftmenuComponent } from './dynamic-leftmenu.component';

describe('DynamicLeftmenuComponent', () => {
  let component: DynamicLeftmenuComponent;
  let fixture: ComponentFixture<DynamicLeftmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicLeftmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicLeftmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
