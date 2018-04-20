import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  room_id;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.room_id = parseInt(this.router.snapshot.paramMap.get('id'));
  }
  
}
