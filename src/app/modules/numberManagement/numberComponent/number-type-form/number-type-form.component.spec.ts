import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NumberTypeFormComponent } from './number-type-form.component';

describe('NumberTypeFormComponent', () => {
  let component: NumberTypeFormComponent;
  let fixture: ComponentFixture<NumberTypeFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
