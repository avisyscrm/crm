import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimmeComponent } from './date-timme.component';

describe('DateTimmeComponent', () => {
  let component: DateTimmeComponent;
  let fixture: ComponentFixture<DateTimmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateTimmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
