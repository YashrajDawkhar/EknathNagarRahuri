import { Component, OnInit } from '@angular/core';
import {FormControl ,FormGroup ,Validators}from '@angular/forms'
@Component({
  selector: 'app-aarti-name',
  templateUrl: './aarti-name.component.html',
  styleUrls: ['./aarti-name.component.css']
})
export class AartiNameComponent implements OnInit {
  date7: any;
  constructor() { }

  ngOnInit(): void {
    
  }

  artiNames = new FormGroup({
    Name : new FormControl('',Validators.required),
    Date : new FormControl('',Validators.required)
  })

  artiDetails(){
    console.log(this.artiNames.value);
    
  }
  
}
