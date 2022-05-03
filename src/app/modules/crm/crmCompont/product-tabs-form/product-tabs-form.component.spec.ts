import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTabsFormComponent } from './product-tabs-form.component';

describe('ProductTabsFormComponent', () => {
  let component: ProductTabsFormComponent;
  let fixture: ComponentFixture<ProductTabsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTabsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTabsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
