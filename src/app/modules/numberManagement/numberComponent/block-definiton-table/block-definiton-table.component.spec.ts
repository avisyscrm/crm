import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockDefinitonTableComponent } from './block-definiton-table.component';

describe('BlockDefinitonTableComponent', () => {
  let component: BlockDefinitonTableComponent;
  let fixture: ComponentFixture<BlockDefinitonTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockDefinitonTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockDefinitonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
