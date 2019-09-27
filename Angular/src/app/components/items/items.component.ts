import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  
})
export class ItemsComponent implements OnInit {
  //========================================================================
  constructor(private httpS: HttpService, private data: DataService) { }

  private item;
  private Array;
  private user;



  bool: boolean = true;
  bool2: boolean = false;

  ngOnInit() {

    this.user = localStorage.getItem('user');

    if (this.user != null) {
      this.bool = false;
      this.bool2 = true;
    }

    this.httpS.all().subscribe((val: any) => {
      this.Array = val;
    })

    this.data.onClick.subscribe(val => {
      this.bool = false;
      this.bool2 = true;

    })

    this.data.onClick2.subscribe(val => {
      this.bool = true;
      this.bool2 = false;

    })

  }

  send() {
    this.httpS.send(this.item).subscribe(val => {
      this.Array = val;
    })
  }
  delete(item) {
    this.httpS.delete(item).subscribe(val => {
      this.Array = val;
      this.data.dels();
    })
  }

  add(item) {
    this.data.add(item);
  }
}
