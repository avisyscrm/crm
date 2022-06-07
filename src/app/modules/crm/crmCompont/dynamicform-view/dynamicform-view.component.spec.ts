import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DynamicformViewComponent } from './dynamicform-view.component';

describe('DynamicformViewComponent', () => {
  let component: DynamicformViewComponent;
  let fixture: ComponentFixture<DynamicformViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicformViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicformViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
