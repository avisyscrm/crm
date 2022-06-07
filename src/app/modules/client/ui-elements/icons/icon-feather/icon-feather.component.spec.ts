import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconFeatherComponent } from './icon-feather.component';

describe('IconFeatherComponent', () => {
  let component: IconFeatherComponent;
  let fixture: ComponentFixture<IconFeatherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconFeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconFeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
