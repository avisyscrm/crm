import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DynamicLeftmenuComponent } from './dynamic-leftmenu.component';

describe('DynamicLeftmenuComponent', () => {
  let component: DynamicLeftmenuComponent;
  let fixture: ComponentFixture<DynamicLeftmenuComponent>;

  beforeEach(waitForAsync(() => {
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
