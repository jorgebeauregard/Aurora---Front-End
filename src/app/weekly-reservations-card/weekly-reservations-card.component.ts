import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-weekly-reservations-card',
  templateUrl: './weekly-reservations-card.component.html',
  styleUrls: ['./weekly-reservations-card.component.css']
})
export class WeeklyReservationsCardComponent implements OnInit {
  reservas_semanales: any;
  url = 'http://47.254.65.201:8081';
  session_id = this.auth.getEnduserId();
  displayedColumns = ['sala', 'fecha', 'horaInicio', 'horaFinal', 'id'];
  hovered: boolean = false;

  constructor(public auth:AuthService, public dialog: MatDialog, private httpClient: HttpClient, private datePipe: DatePipe, private router: Router) { }

  ngOnInit() {
    this.httpClient.get(this.url + '/bookings/list?enduser=' + this.session_id)
    .subscribe(res => this.reservas_semanales = res);
  }

  onSelectElement(id){
    this.router.navigate(['edit/', id]);
  }

  onChangeHover(){
    this.hovered=!this.hovered;
  }

  addTime(time){
    return Number(time)+1800000;
  }

}
