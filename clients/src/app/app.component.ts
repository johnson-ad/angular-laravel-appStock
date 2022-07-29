import { Component, OnInit } from '@angular/core';
import { Like } from '../app/models/like';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myLike!: Like;

  ngOnInit() {
    this.myLike = new Like(
      'Johnson & Johnson',
      'Johnson & Johnson is a global leadere beauty brand in the U.S.',
      new Date(),
      0,
      'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'
    );
  }
}


