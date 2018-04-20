import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesCardComponent } from './schedules-card.component';

describe('SchedulesCardComponent', () => {
  let component: SchedulesCardComponent;
  let fixture: ComponentFixture<SchedulesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
