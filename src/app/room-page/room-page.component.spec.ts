import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RoomPageComponent } from './room-page.component';
import { MaterialModule } from './../material.module';
import { AppModule } from './../app.module';


describe('RoomPageComponent', () => {
  let component: RoomPageComponent;
  let fixture: ComponentFixture<RoomPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ MaterialModule, AppModule ],
        providers: [
          {provide: APP_BASE_HREF, useValue: '/'}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
