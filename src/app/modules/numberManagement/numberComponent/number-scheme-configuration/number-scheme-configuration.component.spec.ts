import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NumberSchemeConfigurationComponent } from './number-scheme-configuration.component';

describe('NumberSchemeConfigurationComponent', () => {
  let component: NumberSchemeConfigurationComponent;
  let fixture: ComponentFixture<NumberSchemeConfigurationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberSchemeConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberSchemeConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
