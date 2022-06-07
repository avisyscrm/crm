import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconFlagsComponent } from './icon-flags.component';

describe('IconFlagsComponent', () => {
  let component: IconFlagsComponent;
  let fixture: ComponentFixture<IconFlagsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconFlagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
