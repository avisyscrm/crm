import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JobportalApplicantsComponent } from './jobportal-applicants.component';

describe('JobportalApplicantsComponent', () => {
  let component: JobportalApplicantsComponent;
  let fixture: ComponentFixture<JobportalApplicantsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JobportalApplicantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobportalApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
