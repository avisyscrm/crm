import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAttributesFormComponent } from './product-attributes-form.component';

describe('ProductAttributesFormComponent', () => {
  let component: ProductAttributesFormComponent;
  let fixture: ComponentFixture<ProductAttributesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAttributesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAttributesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
