import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(private http:HttpService,private data:DataService) { }

  private item;
  private Array;
  private user;
  private leng;

  bool:boolean = true;
  bool2:boolean = false;


  ngOnInit() {

    //======================================================

    this.user = localStorage.getItem('user');
     
     if(this.user != null ){
      this.bool = false;
      this.bool2 = true;
     }
    //======================================================
 

    this.http.all().subscribe((val:any)=>{
      this.Array = val;
    })

    this.data.onClick.subscribe(val=>{
      this.bool = false;
      this.bool2 = true;

    })

    this.data.onClick2.subscribe(val=>{
      this.bool = true;
      this.bool2 = false;

    })
    
    this.data.onClick4.subscribe((val:any)=>{
    this.leng = val;
    })
  }
    //======================================================

  send(){
  
    this.http.send(this.item).subscribe(val=>{
       this.Array = val;
    })

  }
    //======================================================

  delete(item){
  
  this.http.delete(item).subscribe(val=>{
    this.Array = val;
    })
  }
  //===========================================================
  
  add(item){
    this.data.add(item);
  }
  

}
