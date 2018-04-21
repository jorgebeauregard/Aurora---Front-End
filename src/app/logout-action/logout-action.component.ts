import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-action',
  templateUrl: './logout-action.component.html',
  styleUrls: ['./logout-action.component.css']
})
export class LogoutActionComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
    if(this.auth.isLoggedIn()){
      this.auth.logout();
    }

    this.router.navigate(['login']);
  }

}
