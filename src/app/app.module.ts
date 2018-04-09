import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { RoomPageComponent } from './room-page/room-page.component';


import 'hammerjs';
import { LastReservationCardComponent } from './last-reservation-card/last-reservation-card.component';
import { AllRoomsCardComponent } from './all-rooms-card/all-rooms-card.component';
import { WeeklyReservationsCardComponent } from './weekly-reservations-card/weekly-reservations-card.component';
import { TimeRemainingCardComponent } from './time-remaining-card/time-remaining-card.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MainPageComponent,
    EditPageComponent,
    DeleteDialogComponent,
    RoomPageComponent,
    LastReservationCardComponent,
    AllRoomsCardComponent,
    WeeklyReservationsCardComponent,
    TimeRemainingCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [
    DeleteDialogComponent
  ]
})

export class AppModule { }
