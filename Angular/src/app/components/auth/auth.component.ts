import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Local } from 'protractor/built/driverProviders';
import { DataService } from 'src/app/services/data.service';
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private http: HttpService, private data: DataService,private _snackBar: MatSnackBar) { }

  private user;

  ngOnInit() {
    this.user = localStorage.getItem('user');
    if(this.user != null){

      this.show = false;
      this.hide = true;

    }
  }

  private login = 'Vitaliy';
  private password = '123';
  private obj;

  show:boolean = true;
  hide:boolean = false;

  //================================================================

  log( message: string = 'Complete', action: string = 'Login') {

    this.obj = { login: this.login, password: this.password }

    this.http.login(this.obj).subscribe((val: any) => {

      if (val) {
        this.data.logins();
        localStorage.setItem('user', val);
        this.user = val;
        this.show = false;
        this.hide = true;

        this._snackBar.open(message, action, {
          duration: 2000,
        });
      }
    })
  }
  //================================================================
  logout() {
    localStorage.removeItem('user');
     this.data.logout();

     this.show = true;
     this.hide = false;
  }

  

}
