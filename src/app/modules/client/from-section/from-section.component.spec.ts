import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FromSectionComponent } from './from-section.component';

describe('FromSectionComponent', () => {
  let component: FromSectionComponent;
  let fixture: ComponentFixture<FromSectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FromSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
