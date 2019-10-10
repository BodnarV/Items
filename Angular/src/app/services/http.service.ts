import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as io from "socket.io-client";



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { 
    this.socket = io(this.url);
  }


  private url = 'http://localhost:4000';
  private socket;


  
  all(){
    return this.http.get('http://localhost:4000/user/All');
    
  }

  send(item){
    return this.http.post('http://localhost:4000/user/items',{item:item});

  }

  delete(item){
    return this.http.post('http://localhost:4000/user/delete',{item:item});

  }
  
  login(obj){
    return this.http.post('http://localhost:4000/user/login',obj);

  }

  add(obj){
    return this.http.post('http://localhost:4000/user/add',obj);
   
  }

  gets(team){
    return this.http.post('http://localhost:4000/user/gets',{team:team});

  }
  del(obj){
    return this.http.post('http://localhost:4000/user/del',obj);

  }

  leng(len){
    
    return this.http.post('http://localhost:4000/user/leng',len);
   
  }

//=======================================================

  public sendMessage(message) {
      this.socket.emit('new-message', message);
  }

//=======================================================

  public getMessages = () => {
    return Observable.create((observer) => {
        this.socket.on('add-message', (message) => {
           
            observer.next(message);
        
        });
    });
}
//=======================================================
}


