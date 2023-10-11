import { Component, Input, OnInit, inject } from '@angular/core';
import { FilmService } from '../services/film/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  @Input() filmName: string = "";
  @Input() filmOnAir: boolean = false;
  @Input() filmAffiche: string = "https://upload.wikimedia.org/wikipedia/fr/6/60/Les_Visiteurs_Logo.png";
  @Input() index: number = 0;
  @Input() id: number = 0

  constructor(private Film: FilmService) {
    
  }

  ngOnInit() {
    
  }

  getOnAir()  {
    return this.filmOnAir;
  }

  onWatchFilm() {
    console.log(`Le film ${this.filmName} à démarré`)
  }

  changeColor() {
    return this.filmOnAir ? "purple" : "red";
  }

  onSwitch() {
    this.Film.switchOnAir(this.index)
  }
}
