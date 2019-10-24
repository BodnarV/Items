import { Injectable ,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

private selFilm;
private text;

  SelectedFilm(film) {
    this.selFilm = film;
  }
  Film(){
    return this.selFilm;
  }
  
  setText(text){
   this.text = text;
  }

  Text(){
    return this.text;
  }
}
