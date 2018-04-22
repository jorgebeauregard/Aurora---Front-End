import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Injectable()
export class AuthService {
  URL: string;
  headers: HttpHeaders;

  constructor(private http:HttpClient) { 
    this.URL = 'http://47.254.65.201:8081';
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  // Make the post request with the email and password provided, if successful, sets session data
  login(mail:string, password:string) {
    let enduser;
    let body = {
      email: mail,
      password: password
    }

    return this.http.post(
      this.URL + '/login',
      body,
      { headers: this.headers }
    );  
  }

  // Sets session data with the login response
  setSession(res){
    const expiresAt = moment().add(res.expirationTime, 'second');
     
    localStorage.setItem('token', res.token);
    localStorage.setItem('enduser_id', JSON.stringify(res.enduser));
    localStorage.setItem('expirationTime', JSON.stringify(expiresAt.valueOf()));
  }

  // Delete session data
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('enduser_id');
    localStorage.removeItem('expirationTime');
  }

  // Returns true if the the token exists and has not expired
  isLoggedIn(){
    return moment().isBefore(this.getExpiration());
  }

  // Get the moment expiration time
  getExpiration(){
    return moment(JSON.parse(localStorage.getItem('expires_at')));
  }

  // get the logged in end user
  getEnduserId(){
    return localStorage.getItem('enduser_id');
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
