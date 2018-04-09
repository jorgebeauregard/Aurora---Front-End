import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyReservationsCardComponent } from './weekly-reservations-card.component';

describe('WeeklyReservationsCardComponent', () => {
  let component: WeeklyReservationsCardComponent;
  let fixture: ComponentFixture<WeeklyReservationsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyReservationsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyReservationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
