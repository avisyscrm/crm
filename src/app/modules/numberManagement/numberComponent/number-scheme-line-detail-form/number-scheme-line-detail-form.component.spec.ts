import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NumberSchemeLineDetailFormComponent } from './number-scheme-line-detail-form.component';

describe('NumberschemelinedetailComponent', () => {
  let component: NumberSchemeLineDetailFormComponent;
  let fixture: ComponentFixture<NumberSchemeLineDetailFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberSchemeLineDetailFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberSchemeLineDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
