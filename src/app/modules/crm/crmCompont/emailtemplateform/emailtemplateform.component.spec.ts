import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmailtemplateformComponent } from './emailtemplateform.component';

describe('EmailtemplateformComponent', () => {
  let component: EmailtemplateformComponent;
  let fixture: ComponentFixture<EmailtemplateformComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailtemplateformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailtemplateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
