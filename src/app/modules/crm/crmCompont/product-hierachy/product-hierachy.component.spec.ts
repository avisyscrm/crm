import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHierachyComponent } from './product-hierachy.component';

describe('ProductHierachyComponent', () => {
  let component: ProductHierachyComponent;
  let fixture: ComponentFixture<ProductHierachyComponent>;

  beforeEach(async(() => {
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
