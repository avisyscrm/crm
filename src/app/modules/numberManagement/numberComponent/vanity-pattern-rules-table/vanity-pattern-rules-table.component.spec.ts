import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanityPatternRulesTableComponent } from './vanity-pattern-rules-table.component';

describe('VanityPatternRulesTableComponent', () => {
  let component: VanityPatternRulesTableComponent;
  let fixture: ComponentFixture<VanityPatternRulesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanityPatternRulesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VanityPatternRulesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
