import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  title!: string;
  description!: string;
  createDate!: Date;
  like!: number;
  imageUrl!: string;

  //ngOnInit est appelé automatiquement par Angular au moment de la création de chaque instance du component
  ngOnInit() {
    this.title = 'Johnson & Johnson';
    this.description = 'Johnson & Johnson is a global leader in the beauty industry. We are the largest beauty brand in the world, and the number one brand in the U.S. We are the #1 beauty brand in the world, and the number one beauty brand in the U.S.';
    this.createDate = new Date();
    this.like = 6;
    this.imageUrl = 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80';
  }

}
