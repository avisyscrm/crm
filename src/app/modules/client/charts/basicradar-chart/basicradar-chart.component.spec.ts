import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasicradarChartComponent } from './basicradar-chart.component';

describe('BasicradarChartComponent', () => {
  let component: BasicradarChartComponent;
  let fixture: ComponentFixture<BasicradarChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicradarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicradarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
