import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-time-remaining-card',
  templateUrl: './time-remaining-card.component.html',
  styleUrls: ['./time-remaining-card.component.css']
})
export class TimeRemainingCardComponent implements OnInit {
  hovered: boolean = false;
  session_id = this.auth.getEnduserId();
  user: any;
  url = 'http://47.254.65.201:8081'

  constructor(private auth:AuthService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.url + '/endusers/' + this.session_id)
    .subscribe(res => this.user = res);
  }

  onChangeHover(){
    this.hovered=!this.hovered;
  }

  displayHours(user){
    switch(user.remainingHours){
      case 0:{
        return '0:00';
      }
      case 1:{
        return '0:30';
      }
      case 2:{
        return '1:00';
      }
      case 3:{
        return '1:30';
      }
      case 4:{
        return '2:00';
      }
      case 5:{
        return '2:30';
      }
      case 6:{
        return '3:00';
      }
    }
  }

}
