import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFromTemplateComponent } from './section-from-template.component';

describe('SectionFromTemplateComponent', () => {
  let component: SectionFromTemplateComponent;
  let fixture: ComponentFixture<SectionFromTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionFromTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFromTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
