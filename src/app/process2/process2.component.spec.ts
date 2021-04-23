import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Process2Component } from './process2.component';

describe('Process2Component', () => {
  let component: Process2Component;
  let fixture: ComponentFixture<Process2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Process2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Process2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
