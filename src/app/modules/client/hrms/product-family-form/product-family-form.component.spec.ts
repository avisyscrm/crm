import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFamilyFormComponent } from './product-family-form.component';

describe('ProductFamilyFormComponent', () => {
  let component: ProductFamilyFormComponent;
  let fixture: ComponentFixture<ProductFamilyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFamilyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFamilyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
