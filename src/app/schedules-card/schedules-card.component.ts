import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-schedules-card',
  templateUrl: './schedules-card.component.html',
  styleUrls: ['./schedules-card.component.css']
})
export class SchedulesCardComponent implements OnInit {
  @Input() id : number;
  url = 'http://47.254.65.201:8081';
  horarios: any;

  showFirst=true;
  showSecond=true;
  showThird=true;
  showFourth=true;
  showFifth=true;


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.url + '/rooms/' + this.id)
    .subscribe(res => this.horarios = res);
  }

  clickFirst(){
    this.showFirst=!this.showFirst;
  }

  clickSecond(){
    this.showSecond=!this.showSecond;
  }

  clickThird(){
    this.showThird=!this.showThird;
  }

  clickFourth(){
    this.showFourth=!this.showFourth;
  }

  clickFifth(){
    this.showFifth=!this.showFifth;
  }

  lunes = [
    { name: '7:00', booked: true },
    { name: '7:30', booked: true },
    { name: '8:00', booked: false },
    { name: '8:30', booked: true },
    { name: '9:00', booked: false },
    { name: '9:30', booked: false },
    { name: '10:00', booked: false }
  ];

  martes = [
    { name: '7:00', booked: true },
    { name: '7:30', booked: true },
    { name: '8:00', booked: false },
    { name: '8:30', booked: false },
    { name: '9:00', booked: true },
    { name: '9:30', booked: true },
    { name: '10:00', booked: false }
  ];

  miercoles = [
    { name: '7:00', booked: true },
    { name: '7:30', booked: true },
    { name: '8:00', booked: true },
    { name: '8:30', booked: true },
    { name: '9:00', booked: true },
    { name: '9:30', booked: true },
    { name: '10:00', booked: false }
  ];

  jueves = [
    { name: '7:00', booked: true },
    { name: '7:30', booked: true },
    { name: '8:00', booked: false },
    { name: '8:30', booked: false },
    { name: '9:00', booked: true },
    { name: '9:30', booked: false },
    { name: '10:00', booked: true }
  ];

  viernes = [
    { name: '7:00', booked: true },
    { name: '7:30', booked: true },
    { name: '8:00', booked: false },
    { name: '8:30', booked: false },
    { name: '9:00', booked: false },
    { name: '9:30', booked: true },
    { name: '10:00', booked: true }
  ];

}
