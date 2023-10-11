import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }

  films: {id:number,filmName: string, filmOnAir: boolean, filmAffiche: string}[] = [
    {id: 1,filmName: "Les visiteurs", filmOnAir: false, filmAffiche: "https://upload.wikimedia.org/wikipedia/fr/6/60/Les_Visiteurs_Logo.png"},
    {id: 2,filmName: "Terminator", filmOnAir: false, filmAffiche: "https://fr.web.img4.acsta.net/pictures/22/09/27/12/52/4744720.jpg"},
    {id: 3,filmName: "John Wick", filmOnAir: true, filmAffiche: "https://m.media-amazon.com/images/I/81fk-N7tvbL._AC_UF894,1000_QL80_.jpg"},
    {id: 4,filmName: "Vendredi 13", filmOnAir: true, filmAffiche: "https://www.lulu-berlu.com/upload/image/friday-the-13th---mcfarlane-toys---3-d-movie-poster--affiche-de-film-3-d--p-image-447236-grande.jpg"}
  ];

  setOnAir() {
    for(const film of this.films) {
      film.filmOnAir = true;
    }
  }

  setNoOnAir() {
    for(const film of this.films) {
      film.filmOnAir = false;
    }
  }

  switchOnAir(index: number) {
    this.films[index].filmOnAir = !this.films[index].filmOnAir;
  }

  getFilmById(id : number) {
    let tmp;
    for (const film of this.films) {
      if( film.id == id) {
        tmp = film
      }
    }
    return tmp
  }
 
 }
