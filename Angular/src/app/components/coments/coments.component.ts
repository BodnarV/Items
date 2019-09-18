import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css']
})
export class ComentsComponent implements OnInit {

  constructor(private data: DataService, private http: HttpService) { }

  private team;
  private obj;

  private user;
  private text;
  private array:any;

 
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



    //==============================================
    this.data.onClick3.subscribe(val => {
      this.team = val,
        this.user = localStorage.getItem('user');

      this.http.gets(val).subscribe((arr:any) => {
      
        this.array = arr
          

      })
    })

  }

  add() {
    this.user = localStorage.getItem('user');

    this.obj = { text: this.text, user: this.user, team: this.team }
    this.http.add(this.obj).subscribe(val => {
      this.array = val;
    })
  }

  del(text){
    this.http.del({text:text,team:this.team}).subscribe(val=>{
      this.array = val;

    })
  }

}
