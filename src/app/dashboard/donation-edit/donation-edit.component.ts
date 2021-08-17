import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-donation-edit',
  templateUrl: './donation-edit.component.html',
  styleUrls: ['./donation-edit.component.css']
})
export class DonationEditComponent implements OnInit {
  

  id = this.router.snapshot.params.id

  constructor(private service: BackendService, private router: ActivatedRoute ,private routerlink :Router) {

    service.getDonationByID(this.id).subscribe((data: any) => {
      this.donationNames = new FormGroup({
        Name: new FormControl(data.Name,Validators.required),
        Date: new FormControl('',Validators.required),
        Person: new FormControl(data.Person,Validators.required),
        Amount: new FormControl(data.Amount,Validators.required)
      })
    })

  }

  ngOnInit(): void {
  }

  donationNames = new FormGroup({
    Name: new FormControl('', Validators.required),
    Date: new FormControl('', Validators.required),
    Person: new FormControl('', Validators.required),
    Amount: new FormControl('', Validators.required)
  })


  sucessMessage: boolean = false
  errorMessage: boolean = false
  


  donationDetails() {

    this.service.putDonationByID(this.id,this.donationNames.value).subscribe(()=>{
      this.sucessMessage = true
      this.donationNames.reset()
      this.routerlink.navigateByUrl('/dashboard/donation')
    },()=>{
      this.errorMessage=true
    })
      
      

  
  }

}
