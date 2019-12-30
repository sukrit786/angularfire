import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankiComponent } from './banki.component';

describe('BankiComponent', () => {
  let component: BankiComponent;
  let fixture: ComponentFixture<BankiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
