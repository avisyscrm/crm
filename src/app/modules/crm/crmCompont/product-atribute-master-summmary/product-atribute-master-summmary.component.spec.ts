import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAtributeMasterSummmaryComponent } from './product-atribute-master-summmary.component';

describe('ProductAtributeMasterSummmaryComponent', () => {
  let component: ProductAtributeMasterSummmaryComponent;
  let fixture: ComponentFixture<ProductAtributeMasterSummmaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAtributeMasterSummmaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAtributeMasterSummmaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
