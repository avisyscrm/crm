import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductHierachyFormComponent } from './product-hierachy-form.component';

describe('ProductHierachyFormComponent', () => {
  let component: ProductHierachyFormComponent;
  let fixture: ComponentFixture<ProductHierachyFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductHierachyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHierachyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
