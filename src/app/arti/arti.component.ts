import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
@Component({
  selector: 'app-arti',
  templateUrl: './arti.component.html',
  styleUrls: ['./arti.component.css']
})
export class ArtiComponent implements OnInit {

  artiPhoto:any =[]

  Notlogin:boolean=true
  login:boolean=false

  constructor(private service:BackendService) { 
    this.artiPhoto =service.getArtiPhoto();
    
    if(sessionStorage.getItem("UserName") && sessionStorage.getItem('Password')){
      this.Notlogin=false
      this.login=true
    }
  }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
