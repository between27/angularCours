import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }

  ngOnInit(): void {
    this.films = this.Film.films
   }
 
   setOnAir() {
     for (const film of this.films) {
       film.onAir = true
     }
   }
 
   setNoOnAir() {
     for (const film of this.films) {
       film.onAir = false; 
       console.log(film)
     }
   }
}
