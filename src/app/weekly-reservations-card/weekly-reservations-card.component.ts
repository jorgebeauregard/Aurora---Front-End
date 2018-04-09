import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weekly-reservations-card',
  templateUrl: './weekly-reservations-card.component.html',
  styleUrls: ['./weekly-reservations-card.component.css']
})
export class WeeklyReservationsCardComponent implements OnInit {
  reservas_semanales: any;
  url = 'http://10.50.86.164:3000';
  session_id = 2;
  displayedColumns = ['sala', 'fecha', 'horaInicio', 'horaFinal', 'id'];

  constructor(public dialog: MatDialog, private httpClient: HttpClient, private datePipe: DatePipe, private router: Router) { }

  ngOnInit() {
    this.httpClient.get(this.url + '/reservas_semanales?user_id=' + this.session_id)
    .subscribe(res => this.reservas_semanales = res);
  }

  onSelectElement(id){
    this.router.navigate(['edit/', id]);
  }

}
