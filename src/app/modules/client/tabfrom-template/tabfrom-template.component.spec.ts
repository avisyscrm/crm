import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TabfromTemplateComponent } from './tabfrom-template.component';

describe('TabfromTemplateComponent', () => {
  let component: TabfromTemplateComponent;
  let fixture: ComponentFixture<TabfromTemplateComponent>;

  beforeEach(waitForAsync(() => {
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
