import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FullcalenderComponent } from './fullcalender.component';

describe('FullcalenderComponent', () => {
  let component: FullcalenderComponent;
  let fixture: ComponentFixture<FullcalenderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FullcalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullcalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
