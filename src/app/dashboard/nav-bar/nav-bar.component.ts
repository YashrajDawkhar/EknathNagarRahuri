import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

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
