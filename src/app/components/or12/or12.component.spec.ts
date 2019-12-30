import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Or12Component } from './or12.component';

describe('Or12Component', () => {
  let component: Or12Component;
  let fixture: ComponentFixture<Or12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Or12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Or12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
