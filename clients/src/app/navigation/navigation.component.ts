import { Component, OnInit, Input } from '@angular/core';
import { Like } from '../models/like';
import { FaceSnapsService } from '../services/face-snaps.serivce';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})


export class NavigationComponent implements OnInit {
  post: any;
  posts = new Like();
  constructor(
    private service: FaceSnapsService
  ) { }


  /*
  @Input() cest comme les pros en react 
  si on veut récupérer la valeur d'un attribut d'un autre component on utilise @Input()
  ex:  @Input() likes!: Like; =>on recupere Like du model like
  dans le component en question on import Input et on déclare un attribut avec @Input()
  on lui donne un nom et une valeur qui conrespondre a la classe qu'on a creer dans le doc model
  
  */
  @Input() likes!: Like;

  buttonTest!: string;



  listPost() {
    return this.service.listPost().subscribe((res: any) => {
      console.log(res);
      this.post = res;
    })
  }

  //ngOnInit est appelé automatiquement par Angular au moment de la création de chaque instance du component
  ngOnInit() {
    this.buttonTest = 'Like';
    this.listPost();
  }

  onLike() {
    if (this.buttonTest === 'Like') {
      this.likes.like++;
      this.buttonTest = 'Unlike';
    } else {
      this.likes.like--;
      this.buttonTest = 'Like';
    }
  }
}
