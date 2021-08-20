import { Component, OnInit } from '@angular/core';
import {FormControl ,FormGroup ,Validators}from '@angular/forms'
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryArray:any =[]

  constructor(private service:BackendService ) {
    service.getgallery().subscribe((data)=>{
      this.galleryArray = data
    })
   }
  
  
  ngOnInit(): void {
    
   
  }

  gallery = new FormGroup({
    Img : new FormControl('https://source.unsplash.com/',Validators.required)
    
  })



  sucessMessage:boolean =false
  errorMessage:boolean =false
  delMessage:boolean =false
  artiDetails(){
    
    this.service.postgallery(this.gallery.value).subscribe((data:any)=>{
      this.galleryArray.push(this.gallery.value)
      this.sucessMessage = true
      this.delMessage =false
      this.gallery.reset()
      

    },error=>{
      this.errorMessage = true
    })
    this.sucessMessage =false
    this.errorMessage = false
  }
  
  delData(id:any ,data:any){
    this.service.deletegallery(id).subscribe(()=>{
      this.delMessage = true
      this.sucessMessage =false
    })
    this.delMessage =false

    let index = this.galleryArray.indexOf(data);
    this.galleryArray.splice(index,1)

  }
  

}
