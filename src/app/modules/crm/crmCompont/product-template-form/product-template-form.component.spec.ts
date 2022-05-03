import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTemplateFormComponent } from './product-template-form.component';

describe('ProductTemplateFormComponent', () => {
  let component: ProductTemplateFormComponent;
  let fixture: ComponentFixture<ProductTemplateFormComponent>;

  beforeEach(async(() => {
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
