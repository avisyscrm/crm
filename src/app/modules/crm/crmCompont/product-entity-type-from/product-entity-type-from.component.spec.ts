import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEntityTypeFromComponent } from './product-entity-type-from.component';

describe('ProductEntityTypeFromComponent', () => {
  let component: ProductEntityTypeFromComponent;
  let fixture: ComponentFixture<ProductEntityTypeFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductEntityTypeFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEntityTypeFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
