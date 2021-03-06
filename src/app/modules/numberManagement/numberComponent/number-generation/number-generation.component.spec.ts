import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberGenerationComponent } from './number-generation.component';

describe('NumberGenerationComponent', () => {
  let component: NumberGenerationComponent;
  let fixture: ComponentFixture<NumberGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
