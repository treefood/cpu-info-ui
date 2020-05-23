import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleMeterComponent } from './circle-meter.component';

describe('CircleMeterComponent', () => {
  let component: CircleMeterComponent;
  let fixture: ComponentFixture<CircleMeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleMeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
