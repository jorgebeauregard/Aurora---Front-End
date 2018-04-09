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
  url = 'http://10.50.86.164:3000'

  constructor(public dialog: MatDialog, private httpClient: HttpClient, private datePipe: DatePipe, private router: Router) { }

  ngOnInit() {
    this.httpClient.get(this.url + '/ultima_reserva')
    .subscribe(res => this.ultima_reserva = res);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '600px',
    });
  }

  onSelectReserva(reserva){
    this.router.navigate(['/edit', reserva.alias]);
  }
}
