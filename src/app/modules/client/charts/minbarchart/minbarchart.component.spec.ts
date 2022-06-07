import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MinbarchartComponent } from './minbarchart.component';

describe('MinbarchartComponent', () => {
  let component: MinbarchartComponent;
  let fixture: ComponentFixture<MinbarchartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MinbarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinbarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
