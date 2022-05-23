import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSchemeConfigurationComponent } from './number-scheme-configuration.component';

describe('NumberSchemeConfigurationComponent', () => {
  let component: NumberSchemeConfigurationComponent;
  let fixture: ComponentFixture<NumberSchemeConfigurationComponent>;

  beforeEach(async(() => {
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
