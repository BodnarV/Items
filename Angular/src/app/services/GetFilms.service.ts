import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpService{
constructor(private http:HttpClient) {}

sendMessage(obj){
  return this.http.get(`http://localhost:3000/user/all?obj=${obj.text}&obj2=${obj.num}`);
  
  
}

}
