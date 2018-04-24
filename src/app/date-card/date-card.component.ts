import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-card',
  templateUrl: './date-card.component.html',
  styleUrls: ['./date-card.component.css']
})
export class DateCardComponent implements OnInit {
  hovered: boolean = false;
  today = Date.now();

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
  }

  onChangeHover(){
    this.hovered=!this.hovered;
  }

}
