import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberFormatFormComponent } from './number-format-form.component';

describe('NumberFormatFormComponent', () => {
  let component: NumberFormatFormComponent;
  let fixture: ComponentFixture<NumberFormatFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberFormatFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberFormatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
