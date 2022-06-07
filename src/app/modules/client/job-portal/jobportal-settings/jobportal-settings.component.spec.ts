import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JobportalSettingsComponent } from './jobportal-settings.component';

describe('JobportalSettingsComponent', () => {
  let component: JobportalSettingsComponent;
  let fixture: ComponentFixture<JobportalSettingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JobportalSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobportalSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
