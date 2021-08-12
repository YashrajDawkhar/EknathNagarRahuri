import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
@Component({
  selector: 'app-arti',
  templateUrl: './arti.component.html',
  styleUrls: ['./arti.component.css']
})
export class ArtiComponent implements OnInit {

  artiPhoto:any =[]

  constructor(private service:BackendService) { 
    this.artiPhoto =service.getArtiPhoto();
  }

  ngOnInit(): void {
  }

}
