import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  private objFilm;

  constructor(private dataS: DataService, private router: Router) { }

  ngOnInit() {
    this.objFilm = this.dataS.Film()
  }

  add(obj) {

    let localStoregItems: Array<any>;
    let state: boolean = false;
    obj.favorite = true;

    if (localStorage.getItem('collection') != null) {
      localStoregItems = JSON.parse(localStorage.getItem('collection'));
    }
    else {
      localStoregItems = [];
    }

    localStoregItems.forEach(item => {
      if (item.imdbID === obj.imdbID) {
        state = true;
      }
    });

    if (!state) {
      localStoregItems.push(obj);
      localStorage.setItem('collection', JSON.stringify(localStoregItems));
    }
  }

  back() {
    this.router.navigate([''])
  }
}
