import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs/Observable';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  hovered: boolean = false;
  today = Date.now();

  constructor(private httpClient: HttpClient, private datePipe: DatePipe){
  }

  ngOnInit(){

  }

  onChangeHover(){
    this.hovered=!this.hovered;
  }

}



