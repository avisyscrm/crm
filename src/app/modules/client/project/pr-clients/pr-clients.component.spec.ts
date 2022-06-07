import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrClientsComponent } from './pr-clients.component';

describe('PrClientsComponent', () => {
  let component: PrClientsComponent;
  let fixture: ComponentFixture<PrClientsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
