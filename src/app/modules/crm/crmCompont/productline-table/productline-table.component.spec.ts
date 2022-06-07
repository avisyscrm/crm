import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductlineTableComponent } from './productline-table.component';

describe('ProductlineTableComponent', () => {
  let component: ProductlineTableComponent;
  let fixture: ComponentFixture<ProductlineTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductlineTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlineTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
