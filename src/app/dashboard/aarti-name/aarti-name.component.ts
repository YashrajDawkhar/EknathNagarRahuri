import { Component, OnInit } from '@angular/core';
import {FormControl ,FormGroup ,Validators}from '@angular/forms'
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-aarti-name',
  templateUrl: './aarti-name.component.html',
  styleUrls: ['./aarti-name.component.css']
})
export class AartiNameComponent implements OnInit {
  
  constructor(private service:BackendService ) { }
  
  
  ngOnInit(): void {
    
   
  }

  artiNames = new FormGroup({
    Name : new FormControl('',Validators.required),
    Date : new FormControl('',Validators.required)
  })

  sucessMessage:boolean =false
  errorMessage:boolean =false
  artiDetails(){

    this.service.postArtiName(this.artiNames.value).subscribe(data=>{
      this.sucessMessage = true
      this.artiNames.reset()
    },error=>{
      this.errorMessage = true
    })
    this.sucessMessage =false
  }
  
  



}
