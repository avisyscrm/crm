import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductHierachyComponent } from './product-hierachy.component';

describe('ProductHierachyComponent', () => {
  let component: ProductHierachyComponent;
  let fixture: ComponentFixture<ProductHierachyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductHierachyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHierachyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
