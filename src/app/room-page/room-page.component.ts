import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.css']
})
export class RoomPageComponent implements OnInit {

  showFirst=true;
  showSecond=true;
  showThird=true;
  showFourth=true;
  showFifth=true;

  constructor() { }

  ngOnInit() {
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
