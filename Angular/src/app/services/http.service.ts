import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { 
  }

  public token = localStorage.getItem('token');


  // login(obj){
  //   return this.http.post('http://localhost:4000/user/login',obj);
  // }
  
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
}


