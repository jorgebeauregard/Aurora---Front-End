import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';


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

  day1: any;
  day2: any;
  day3: any;
  day4: any;
  day5: any;


  constructor(private httpClient: HttpClient, private datePipe: DatePipe) { }

  ngOnInit() {
    this.httpClient.get(this.url + '/rooms/' + this.id)
    .subscribe(res => { this.horarios = res;
      this.day1 = this.horarios.timeslots.filter(item => item.daysUntil === 0);
      this.day2 = this.horarios.timeslots.filter(item => item.daysUntil === 1);
      this.day3 = this.horarios.timeslots.filter(item => item.daysUntil === 2);
      this.day4 = this.horarios.timeslots.filter(item => item.daysUntil === 3);
      this.day5 = this.horarios.timeslots.filter(item => item.daysUntil === 4);
    });

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

}
