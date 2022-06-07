import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NumberSchemeFormComponent } from './number-scheme-form.component';

describe('NumberSchemeFormComponent', () => {
  let component: NumberSchemeFormComponent;
  let fixture: ComponentFixture<NumberSchemeFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberSchemeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberSchemeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
