import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from './../material.module';
import { AppModule } from './../app.module';

import { AllRoomsCardComponent } from './all-rooms-card.component';

describe('AllRoomsCardComponent', () => {
  let component: AllRoomsCardComponent;
  let fixture: ComponentFixture<AllRoomsCardComponent>;

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
    fixture = TestBed.createComponent(AllRoomsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
