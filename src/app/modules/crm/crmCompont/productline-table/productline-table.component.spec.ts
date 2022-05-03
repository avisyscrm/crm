import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlineTableComponent } from './productline-table.component';

describe('ProductlineTableComponent', () => {
  let component: ProductlineTableComponent;
  let fixture: ComponentFixture<ProductlineTableComponent>;

  beforeEach(async(() => {
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
