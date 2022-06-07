import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrTicketdetailsComponent } from './pr-ticketdetails.component';

describe('PrTicketdetailsComponent', () => {
  let component: PrTicketdetailsComponent;
  let fixture: ComponentFixture<PrTicketdetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrTicketdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrTicketdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
