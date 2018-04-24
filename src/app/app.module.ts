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
import { LastReservationCardComponent } from './last-reservation-card/last-reservation-card.component';
import { AllRoomsCardComponent } from './all-rooms-card/all-rooms-card.component';
import { WeeklyReservationsCardComponent } from './weekly-reservations-card/weekly-reservations-card.component';
import { TimeRemainingCardComponent } from './time-remaining-card/time-remaining-card.component';
import { SchedulesCardComponent } from './schedules-card/schedules-card.component';

import 'hammerjs';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutActionComponent } from './logout-action/logout-action.component';
import { DateCardComponent } from './date-card/date-card.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { ErrorHandlerService } from './services/error-handler.service';



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
    SchedulesCardComponent,
    LoginPageComponent,
    LogoutActionComponent,
    DateCardComponent,
    LoginCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DatePipe,AuthService, ErrorHandlerService],
  bootstrap: [AppComponent],
  entryComponents: [
    DeleteDialogComponent
  ]
})

export class AppModule { 
}
