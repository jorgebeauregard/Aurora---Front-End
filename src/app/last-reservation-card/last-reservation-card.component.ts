import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-last-reservation-card',
  templateUrl: './last-reservation-card.component.html',
  styleUrls: ['./last-reservation-card.component.css']
})

export class LastReservationCardComponent implements OnInit {
  ultima_reserva: any;
  url = 'http://47.254.65.201:8081';
  session_id = 2;
  hovered: boolean = false;

  constructor(public dialog: MatDialog, private httpClient: HttpClient, private datePipe: DatePipe, private router: Router) { }

  ngOnInit() {
    this.httpClient.get(this.url + '/endusers/' + this.session_id + '/latestbooking')
    .subscribe(res => this.ultima_reserva = res);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '600px',
    });
  }

  onSelectReserva(reserva){
    this.router.navigate(['/edit', reserva.room]);
  }

  onChangeHover(){
    this.hovered=!this.hovered;
  }
}
