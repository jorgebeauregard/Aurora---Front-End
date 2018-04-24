import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {
  url = 'http://47.254.65.201:8081';
  success;

  constructor(public thisDialogRef: MatDialogRef<DeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  deleteBooking(){
    this.httpClient.delete(
      (this.url + '/bookings/' + this.data.info.idBooking), 
    ).subscribe(
        res => {
          this.success = res;
          this.refresh();
        });
  }

  refresh(){
    window.location.reload();
  }

}
