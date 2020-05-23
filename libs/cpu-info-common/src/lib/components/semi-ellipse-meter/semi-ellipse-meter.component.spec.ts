import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiEllipseMeterComponent } from './semi-ellipse-meter.component';

describe('SemiEllipseMeterComponent', () => {
  let component: SemiEllipseMeterComponent;
  let fixture: ComponentFixture<SemiEllipseMeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemiEllipseMeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiEllipseMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
