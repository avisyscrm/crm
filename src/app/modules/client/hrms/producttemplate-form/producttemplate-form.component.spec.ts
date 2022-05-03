import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttemplateFormComponent } from './producttemplate-form.component';

describe('ProducttemplateFormComponent', () => {
  let component: ProducttemplateFormComponent;
  let fixture: ComponentFixture<ProducttemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducttemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducttemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
