import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockDefinationFormComponent } from './block-defination-form.component';

describe('BlockDefinationFormComponent', () => {
  let component: BlockDefinationFormComponent;
  let fixture: ComponentFixture<BlockDefinationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockDefinationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockDefinationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
