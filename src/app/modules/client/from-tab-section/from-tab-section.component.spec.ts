import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FromTabSectionComponent } from './from-tab-section.component';

describe('FromTabSectionComponent', () => {
  let component: FromTabSectionComponent;
  let fixture: ComponentFixture<FromTabSectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FromTabSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromTabSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
