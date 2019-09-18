import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  onClick: EventEmitter<any> = new EventEmitter();
  onClick2: EventEmitter<any> = new EventEmitter();
  onClick3: EventEmitter<any> = new EventEmitter();




  bool:boolean = true;
  bool2:boolean = false;
  
 
  logout(){
    this.onClick2.emit();
    

  }

  logins(){
    this.onClick.emit();

  }

  add(item){
   this.onClick3.emit(item);
  }
}
 