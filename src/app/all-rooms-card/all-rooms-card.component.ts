import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-rooms-card',
  templateUrl: './all-rooms-card.component.html',
  styleUrls: ['./all-rooms-card.component.css']
})
export class AllRoomsCardComponent implements OnInit {
  url = 'http://10.50.86.164:3000';
  salas: any;

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    this.httpClient.get(this.url + '/salas')
    .subscribe(res => this.salas = res);
  }

  onSelectSala(sala){
    this.router.navigate(['/room', sala.id]);
  }

}
