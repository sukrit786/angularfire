import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcloudComponent } from './orcloud.component';

describe('OrcloudComponent', () => {
  let component: OrcloudComponent;
  let fixture: ComponentFixture<OrcloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrcloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
