import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  Notlogin:boolean=true
  login:boolean=false

  constructor() {
    if(localStorage.getItem("UserName") && localStorage.getItem('Password')){
      this.Notlogin=false
      this.login=true
    }
   }

  ngOnInit(): void {
  }

}
