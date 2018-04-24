import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { ErrorHandlerService } from '../services/error-handler.service';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {

  hide: boolean = true;
  hovered: boolean = false;
  success: any;
  message: string;

  email: string;
  password: string;
  
  url = 'http://47.254.65.201:8081';

  constructor(private errorHandler:ErrorHandlerService, private auth:AuthService, private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    if(this.auth.isLoggedIn){
      this.router.navigate(['']);
    }
  }

  login(email: string, password: string){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.auth.login(email, password)
    .subscribe(
      res =>{
        console.log(res);
        this.auth.setSession(res);
        console.log(this.auth.isLoggedIn());
        this.router.navigate(['']);
      },
      err =>{
        this.errorHandler.handleError(err);
      }
    );
  }

  togglePassword(){
    this.hide = !this.hide;
  }

  onChangeHover(){
    this.hovered=!this.hovered;
  }

}
