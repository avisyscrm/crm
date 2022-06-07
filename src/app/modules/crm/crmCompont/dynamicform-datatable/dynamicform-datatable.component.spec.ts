import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DynamicformDatatableComponent } from './dynamicform-datatable.component';

describe('DynamicformDatatableComponent', () => {
  let component: DynamicformDatatableComponent;
  let fixture: ComponentFixture<DynamicformDatatableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicformDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicformDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
