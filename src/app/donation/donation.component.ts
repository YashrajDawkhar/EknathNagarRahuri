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
  total:number=0;
  constructor(private service:BackendService) {
    if(sessionStorage.getItem("UserName") && sessionStorage.getItem('Password')){
      this.Notlogin=false
      this.login=true
    }

    service.getDonation().subscribe((data)=>{
      this.donation =data

      this.total=this.donation.reduce((x:any,y:any)=>{
        return x + y.Amount
      },0)

    })

    
    
   

   }

  ngOnInit(): void {
  }

}
