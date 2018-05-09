import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from './../material.module';
import { AppModule } from './../app.module';

import { TimeRemainingCardComponent } from './time-remaining-card.component';

describe('TimeRemainingCardComponent', () => {
  let component: TimeRemainingCardComponent;
  let fixture: ComponentFixture<TimeRemainingCardComponent>;

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
    fixture = TestBed.createComponent(TimeRemainingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
