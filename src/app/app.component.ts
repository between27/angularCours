import { Component, OnInit } from '@angular/core';
import { FilmService } from './services/film/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Film';
  films: any = [
    {
      title: 'Jurassic Park',
      onAir: false,
      filmAffiche: 'https://upload.wikimedia.org/wikipedia/fr/6/6a/Jurassic_Park_logo.svg'
    }, {
      title: 'Star Wars',
      onAir: false,
      filmAffiche: 'https://lumiere-a.akamaihd.net/v1/images/image_83011738.jpeg?region=0,0,540,810'
    }, {
      title: 'Dune',
      onAir: true,
      filmAffiche: 'https://musicart.xboxlive.com/7/ca125200-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'
    }

  ]
    ;

  constructor(
    private Film: FilmService
  ) { }



}
