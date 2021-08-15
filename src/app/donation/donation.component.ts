import { Component, OnInit } from '@angular/core';
import { BackendService } from '../dashboard/backend.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  Notlogin:boolean=true
  login:boolean=false

  donation:any=[]

  constructor(private service:BackendService) {
    if(localStorage.getItem("UserName") && localStorage.getItem('Password')){
      this.Notlogin=false
      this.login=true
    }

    service.getDonation().subscribe((data)=>{
      this.donation =data
    })


   }

  ngOnInit(): void {
  }

}
