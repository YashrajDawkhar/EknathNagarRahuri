import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-donation-edit',
  templateUrl: './donation-edit.component.html',
  styleUrls: ['./donation-edit.component.css']
})
export class DonationEditComponent implements OnInit {
  donationData: any = []
  
  constructor(private service: BackendService) {
    
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
  delMessage: boolean = false


  donationDetails() {

    this.service.postDonation(this.donationNames.value).subscribe((data: any) => {
      this.donationData.push(this.donationNames.value)
      this.sucessMessage = true
      this.delMessage = false
      this.donationNames.reset()


    }, (error) => {
      this.errorMessage = true
    })
    this.sucessMessage = false
    this.errorMessage = false
  }

}
