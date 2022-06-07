import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WOtherComponent } from './w-other.component';

describe('WOtherComponent', () => {
  let component: WOtherComponent;
  let fixture: ComponentFixture<WOtherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
