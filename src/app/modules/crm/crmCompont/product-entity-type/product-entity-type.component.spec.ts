import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEntityTypeComponent } from './product-entity-type.component';

describe('ProductEntityTypeComponent', () => {
  let component: ProductEntityTypeComponent;
  let fixture: ComponentFixture<ProductEntityTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductEntityTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEntityTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
