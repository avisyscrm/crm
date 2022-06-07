import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SparklinesComponent } from './sparklines.component';

describe('SparklinesComponent', () => {
  let component: SparklinesComponent;
  let fixture: ComponentFixture<SparklinesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SparklinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparklinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
