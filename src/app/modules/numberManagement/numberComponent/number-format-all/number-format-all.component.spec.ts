import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NumberFormatAllComponent } from './number-format-all.component';

describe('NumberFormatAllComponent', () => {
  let component: NumberFormatAllComponent;
  let fixture: ComponentFixture<NumberFormatAllComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberFormatAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberFormatAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
