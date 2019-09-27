import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';

import { trigger, transition, useAnimation } from '@angular/animations';
import {
  slideInDown,
  fadeIn,
  fadeInDown,
  zoomIn
} from 'ng-animate'

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css'],

  animations: [
    trigger('slideInDown', [transition('* => *', useAnimation(slideInDown))]),
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))]),
    trigger('fadeInDown', [transition('* => *', useAnimation(fadeInDown))]),
    trigger('zoomIn', [transition('* => *', useAnimation(zoomIn))])

  ]
})
export class ComentsComponent implements OnInit {
  //============================================================Animations
  zoomIn = false;
  slideInDown = false;
  fadeIn = false;
  fadeInDown = false;
  //============================================================
  constructor(private data: DataService, private http: HttpService) { }

  private team;
  private obj;

  private user;
  private text;
  private array:any = [];
  private arrayLength;

  show:boolean = true;
  hide:boolean = false;


  ngOnInit() {
  
   if(localStorage.user != null){
     this.show = false;
     this.hide = true;
  
   }

  this.data.onClick2.subscribe(val=>{
    this.show = true;
    this.hide = false;
    
  })

  this.data.onClick.subscribe(val=>{
    this.show = false;
    this.hide = true;
    this.user = localStorage.getItem('user');

  })

    this.data.onClick3.subscribe(val => {
      this.team = val,
      this.user = localStorage.getItem('user');
      //------------------------------------------
      this.http.gets(val).subscribe((arr:any) => {
       
         if(arr == null){
         this.array = [{text:'Not Found'}];
         this.arrayLength = this.array.length

         } if(arr) {
        this.array = arr
        this.arrayLength = arr.length;
       }
      })
      //------------------------------------------Animations
      this.slideInDown = true;
    


       
     
    })

    this.data.onClick5.subscribe(()=>{
      this.array = [{text:'Not Found'}]
    })

  }

  add() {
    this.user = localStorage.getItem('user');

    this.obj = { text: this.text, user: this.user, team: this.team }
    this.http.add(this.obj).subscribe(val => {
      this.array = val;
      this.arrayLength = this.array.length;

    })
  }

  del(text){
    this.http.del({text:text,team:this.team}).subscribe(val=>{
      this.array = val;
      this.arrayLength = this.array.length;

    })
  }

}
