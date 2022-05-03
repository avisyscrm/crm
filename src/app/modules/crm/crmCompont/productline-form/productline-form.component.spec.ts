import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlineFormComponent } from './productline-form.component';

describe('ProductlineFormComponent', () => {
  let component: ProductlineFormComponent;
  let fixture: ComponentFixture<ProductlineFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductlineFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
