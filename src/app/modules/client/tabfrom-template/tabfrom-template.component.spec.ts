import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabfromTemplateComponent } from './tabfrom-template.component';

describe('TabfromTemplateComponent', () => {
  let component: TabfromTemplateComponent;
  let fixture: ComponentFixture<TabfromTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabfromTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabfromTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
