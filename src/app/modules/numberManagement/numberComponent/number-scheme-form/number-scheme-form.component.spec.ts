import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSchemeFormComponent } from './number-scheme-form.component';

describe('NumberSchemeFormComponent', () => {
  let component: NumberSchemeFormComponent;
  let fixture: ComponentFixture<NumberSchemeFormComponent>;

  beforeEach(async(() => {
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
