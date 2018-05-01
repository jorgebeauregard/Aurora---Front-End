import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  night_mode=false;

  constructor(private httpClient: HttpClient){
  }

  ngOnInit(){

  }

  toggleNightMode(){
    this.night_mode=!this.night_mode;
  }

}



