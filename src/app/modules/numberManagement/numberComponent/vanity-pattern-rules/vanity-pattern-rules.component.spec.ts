import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanityPatternRulesComponent } from './vanity-pattern-rules.component';

describe('VanityPatternRulesComponent', () => {
  let component: VanityPatternRulesComponent;
  let fixture: ComponentFixture<VanityPatternRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanityPatternRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanityPatternRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
