import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UIELEMENTSComponent } from './ui-elements.component';

describe('UIELEMENTSComponent', () => {
  let component: UIELEMENTSComponent;
  let fixture: ComponentFixture<UIELEMENTSComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UIELEMENTSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UIELEMENTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
