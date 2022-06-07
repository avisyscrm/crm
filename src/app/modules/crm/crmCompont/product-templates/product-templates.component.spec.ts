import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductTemplatesComponent } from './product-templates.component';

describe('ProductTemplatesComponent', () => {
  let component: ProductTemplatesComponent;
  let fixture: ComponentFixture<ProductTemplatesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
