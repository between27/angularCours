import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent /*implements OnInit*/ {
@Input() filmName: string = ""
@Input() filmOnAir: boolean = false
@Input() filmAffiche: string =""


constructor() {}

// ngOnInit(): void {
  
// }

getOnAir() {
  return this.filmOnAir
}

getAffiche() {
  return this.filmAffiche
}

onWatchFilm(){
  console.log(`Vous regardez ${this.filmName}`)
}
changeColor() {
  return this.filmOnAir ? 'purple' : "red"
}
}
