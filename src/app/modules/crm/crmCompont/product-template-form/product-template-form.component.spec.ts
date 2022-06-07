import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductTemplateFormComponent } from './product-template-form.component';

describe('ProductTemplateFormComponent', () => {
  let component: ProductTemplateFormComponent;
  let fixture: ComponentFixture<ProductTemplateFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
