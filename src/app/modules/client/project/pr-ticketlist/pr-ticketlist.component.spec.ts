import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrTicketlistComponent } from './pr-ticketlist.component';

describe('PrTicketlistComponent', () => {
  let component: PrTicketlistComponent;
  let fixture: ComponentFixture<PrTicketlistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrTicketlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrTicketlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
