import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRemainingCardComponent } from './time-remaining-card.component';

describe('TimeRemainingCardComponent', () => {
  let component: TimeRemainingCardComponent;
  let fixture: ComponentFixture<TimeRemainingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeRemainingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeRemainingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
