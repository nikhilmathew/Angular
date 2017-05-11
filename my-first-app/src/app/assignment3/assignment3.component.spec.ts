import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment3Component } from './assignment3.component';

describe('Assignment3Component', () => {
  let component: Assignment3Component;
  let fixture: ComponentFixture<Assignment3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
