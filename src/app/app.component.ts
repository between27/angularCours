import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { FilmService } from './services/film/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Film';
  time : number;
  films:{filmName: string, filmOnAir: boolean, filmAffiche: string}[] = []; //Ou any

  constructor(private Film: FilmService) {

  }

  ngOnInit() {
    this.films = this.Film.films
    const counter = interval(1000)

    counter.subscribe(
      (value) => {
        this.time = value
      },
      (error) => {
        console.log('ERROR : ' + error)
      },
      ()=> {
        console.log("Observable complete !")
      }
    )
  }

  onAirAll() {
    this.Film.setOnAir();
  }

  OnNoAirAll() {
    this.Film.setNoOnAir();
  }
}
