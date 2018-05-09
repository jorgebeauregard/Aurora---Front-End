import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from './../material.module';
import { AppModule } from './../app.module';

import { WeeklyReservationsCardComponent } from './weekly-reservations-card.component';

describe('WeeklyReservationsCardComponent', () => {
  let component: WeeklyReservationsCardComponent;
  let fixture: ComponentFixture<WeeklyReservationsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, AppModule],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
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
