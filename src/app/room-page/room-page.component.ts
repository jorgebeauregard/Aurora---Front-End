import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.css'],
})
export class RoomPageComponent implements OnInit {
  room_id;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.room_id = parseInt(this.router.snapshot.paramMap.get('id'));
  }


}
