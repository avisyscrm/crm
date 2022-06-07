import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconLinesComponent } from './icon-lines.component';

describe('IconLinesComponent', () => {
  let component: IconLinesComponent;
  let fixture: ComponentFixture<IconLinesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
