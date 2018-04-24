import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private router:Router, private Auth:AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigate(['/logout']);
  }

  checkIfLoggedIn(){
    return (this.Auth.isLoggedIn());
  }


}
