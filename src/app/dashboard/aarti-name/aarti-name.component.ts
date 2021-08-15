import { Component, OnInit } from '@angular/core';
import {FormControl ,FormGroup ,Validators}from '@angular/forms'
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-aarti-name',
  templateUrl: './aarti-name.component.html',
  styleUrls: ['./aarti-name.component.css']
})
export class AartiNameComponent implements OnInit {
  artiNameData:any =[]

  constructor(private service:BackendService ) {
    service.getArtiName().subscribe((data)=>{
      this.artiNameData = data
    })
   }
  
  
  ngOnInit(): void {
    
   
  }

  artiNames = new FormGroup({
    Name : new FormControl('',Validators.required),
    Date : new FormControl('',Validators.required)
  })



  sucessMessage:boolean =false
  errorMessage:boolean =false
  delMessage:boolean =false
  artiDetails(){
    
    this.service.postArtiName(this.artiNames.value).subscribe((data:any)=>{
      this.artiNameData.push(this.artiNames.value)
      this.sucessMessage = true
      this.delMessage =false
      this.artiNames.reset()
      

    },error=>{
      this.errorMessage = true
    })
    this.sucessMessage =false
    this.errorMessage = false
  }
  
  delData(id:any ,data:any){
    this.service.delArtiName(id).subscribe(()=>{
      this.delMessage = true
      this.sucessMessage =false
    })
    this.delMessage =false

    let index = this.artiNameData.indexOf(data);
    this.artiNameData.splice(index,1)

  }
  



}
