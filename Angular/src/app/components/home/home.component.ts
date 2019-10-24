import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { HttpService } from 'src/app/services/GetFilms.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private httpS: HttpService, private router: Router, private dataS: DataService) { }
  private text;
  private num;

  private films = [];
  private films2;
  private bestFilms = null;
  private All: boolean = true;
  private Favorites: boolean = false;



  ngOnInit() {
    //=========Get and show items from localStorage
    let json: any = localStorage.getItem('collection');
    console.log(typeof (JSON.parse(json)));

    console.log(JSON.parse(json));
    this.bestFilms = JSON.parse(json);
    //

    //======Show finded film after reloading

    this.text = this.dataS.Text()  

    if(this.text != undefined){
     this.KeyUpsendMessage();    
    }   
    
    
  } 


  KeyUpsendMessage() {

    if (this.text.length > 2) {

      setTimeout(() => {
        this.httpS.sendMessage({ text: this.text, num: this.num }).subscribe((res: any) => {
          this.films = res[0].Search.concat(res[1].Search);
        
          //========================Filter
          if(this.bestFilms != null){
          this.films2 = this.films.filter(e => this.bestFilms.findIndex(i => i.imdbID == e.imdbID) === -1);    
          } else {
            this.films2 = this.films; 
          }
          //
          this.dataS.setText(this.text); // Set text in Service
        })
      }, 300);

    } else if (this.text.length < 2) {
      this.films = [];
    }

  }

  about(film) {
    this.dataS.SelectedFilm(film);

    this.router.navigate(['about']);
  }

  //===========Functions for boolean vars
  showAll() {
    this.All = true;
    this.Favorites = false;
  }
  showFavorite() {
    this.All = false;
    this.Favorites = true;
  }
  //

  delete(id) {
    for (var i = 0; i < this.bestFilms.length; i++) {
      if (this.bestFilms[i].imdbID == id) {
        this.bestFilms.splice(i, 1);
      }
    }

    localStorage.setItem('collection', JSON.stringify(this.bestFilms));
  }

}
