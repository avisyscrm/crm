import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VanityNumberComponent } from './vanity-number.component';

describe('VanityNumberComponent', () => {
  let component: VanityNumberComponent;
  let fixture: ComponentFixture<VanityNumberComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VanityNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanityNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
