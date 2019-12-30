import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HciComponent } from './hci.component';

describe('HciComponent', () => {
  let component: HciComponent;
  let fixture: ComponentFixture<HciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
