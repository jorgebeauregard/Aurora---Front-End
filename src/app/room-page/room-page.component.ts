import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.css'],
})
export class RoomPageComponent implements OnInit {
  room_id;
  sala: any;
  session_id = 5;

  day1;
  day2;
  day3;
  day4;
  day5;

  selected_date;
  start_time;
  end_time;

  url = 'http://47.254.65.201:8081';

  success;


  constructor(private activated_router: ActivatedRoute, private httpClient: HttpClient, private datePipe: DatePipe, private router: Router) { }

  ngOnInit() {
    this.room_id = parseInt(this.activated_router.snapshot.paramMap.get('id'));

    this.httpClient.get(this.url + '/rooms/' + this.room_id)
    .subscribe(res => { this.sala = res;
      this.day1 = this.sala.timeslots.filter(item => item.daysUntil === 0);
      this.day2 = this.sala.timeslots.filter(item => item.daysUntil === 1);
      this.day3 = this.sala.timeslots.filter(item => item.daysUntil === 2);
      this.day4 = this.sala.timeslots.filter(item => item.daysUntil === 3);
      this.day5 = this.sala.timeslots.filter(item => item.daysUntil === 4);
    });

  }

  createReservation(room, enduser, startTime, endTime){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post(
      (this.url + '/bookings'), 
      {room: room, enduser: enduser, startTime: startTime, endTime: endTime}, 
      {headers: headers}
    ).subscribe(
        res => {
          this.success = res;
          this.router.navigate(['']);
        });
  }


}
