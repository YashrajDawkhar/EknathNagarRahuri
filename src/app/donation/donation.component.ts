import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

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
