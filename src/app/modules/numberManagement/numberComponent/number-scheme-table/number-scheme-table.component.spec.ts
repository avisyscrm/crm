import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSchemeTableComponent } from './number-scheme-table.component';

describe('NumberSchemeTableComponent', () => {
  let component: NumberSchemeTableComponent;
  let fixture: ComponentFixture<NumberSchemeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberSchemeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberSchemeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
