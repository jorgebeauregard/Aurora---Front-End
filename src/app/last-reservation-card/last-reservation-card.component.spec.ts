import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastReservationCardComponent } from './last-reservation-card.component';

describe('LastReservationCardComponent', () => {
  let component: LastReservationCardComponent;
  let fixture: ComponentFixture<LastReservationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastReservationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastReservationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
