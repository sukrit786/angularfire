import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmComponent } from './epm.component';

describe('EpmComponent', () => {
  let component: EpmComponent;
  let fixture: ComponentFixture<EpmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
