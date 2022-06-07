import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconFontawesomeComponent } from './icon-fontawesome.component';

describe('IconFontawesomeComponent', () => {
  let component: IconFontawesomeComponent;
  let fixture: ComponentFixture<IconFontawesomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconFontawesomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconFontawesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
