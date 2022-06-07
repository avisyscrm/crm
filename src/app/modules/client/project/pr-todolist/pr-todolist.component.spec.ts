import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrTodolistComponent } from './pr-todolist.component';

describe('PrTodolistComponent', () => {
  let component: PrTodolistComponent;
  let fixture: ComponentFixture<PrTodolistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrTodolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrTodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
