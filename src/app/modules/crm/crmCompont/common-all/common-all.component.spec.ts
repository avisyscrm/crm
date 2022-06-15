import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonAllComponent } from './common-all.component';

describe('CommonAllComponent', () => {
  let component: CommonAllComponent;
  let fixture: ComponentFixture<CommonAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
