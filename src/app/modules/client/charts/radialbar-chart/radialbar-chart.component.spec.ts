import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RadialbarChartComponent } from './radialbar-chart.component';

describe('RadialbarChartComponent', () => {
  let component: RadialbarChartComponent;
  let fixture: ComponentFixture<RadialbarChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RadialbarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadialbarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
