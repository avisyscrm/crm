import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WSocialComponent } from './w-social.component';

describe('WSocialComponent', () => {
  let component: WSocialComponent;
  let fixture: ComponentFixture<WSocialComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
