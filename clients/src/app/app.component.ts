import { Component, OnInit } from '@angular/core';
import { Like } from '../app/models/like';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myLike!: Like;
  myLike2!: Like;
  myLike3!: Like;

  ngOnInit() {
    // on utilse new Like() parce-qu'on a tuliser un constructor avec des parametres
    //si on n'avait creer un constructor on allait juste declarer notre methode sans utiliser new
    this.myLike = {
      title: 'Johnson & Johnson',
      description: 'Johnson & Johnson is a global leadere beauty brand in the U.S.',
      createDate: new Date(),
      like: 12,
      imageUrl: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
      location: 'New York'
    };

    this.myLike2 = {
      title: 'The Body Shop',
      description: 'Johnson beauty brand in the U.S.he U.S.',
      createDate: new Date(),
      like: 4,
      imageUrl: 'https://images.unsplash.com/photo-1654538985746-b4ee3c142193?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      location: 'Paris'
    };

    this.myLike3 = {
      title: 'Louis Vuitton',
      description: 'Johnson beauty brand in the U.S.',
      createDate: new Date(),
      like: 0,
      imageUrl: 'https://images.unsplash.com/photo-1655500062895-f9558c44309a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'

    };
  }
}


