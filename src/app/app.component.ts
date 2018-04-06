import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'app';
  url = 'https://jsonplaceholder.typicode.com/posts';
  posts: Observable<Post[]>;

  constructor(private httpClient: HttpClient){

  }

  ngOnInit(): void{
    this.posts = this.httpClient.get<Post[]>(this.url);
  }
}



