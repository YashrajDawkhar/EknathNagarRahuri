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

  artiDetails(){
    console.log(this.artiNames.value);
    this.service.postArtiName(this.artiNames.value).subscribe(data=>{
      this.artiNames.reset()
    },error=>{
      console.log(error);
      
    })
  }
  
}
