import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  url = '10.50.90.9:8082/bookings/list'
  session_id = 2;
  reservas_semanales: any;
  salas: any;
  displayedColumns = ['sala', 'fecha', 'horaInicio', 'horaFinal', 'id'];

  constructor(public dialog: MatDialog, private httpClient: HttpClient) { }

  ngOnInit() {
    this.reservas_semanales = this.httpClient.get(this.url);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '600px',
    });
  }

}
