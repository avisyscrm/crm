import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrTaskboardComponent } from './pr-taskboard.component';

describe('PrTaskboardComponent', () => {
  let component: PrTaskboardComponent;
  let fixture: ComponentFixture<PrTaskboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrTaskboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrTaskboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
