import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberTypeTableComponent } from './number-type-table.component';

describe('NumberTypeTableComponent', () => {
  let component: NumberTypeTableComponent;
  let fixture: ComponentFixture<NumberTypeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberTypeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberTypeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
