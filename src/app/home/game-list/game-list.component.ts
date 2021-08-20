import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/dashboard/backend.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  events: any = [];
  progressSpinner = true
  constructor(private service: BackendService) {
    service.getEventUpdate().subscribe((data: any) => {
      this.events = [...data].reverse();
      this.progressSpinner =false
    });
  
  }

  

  ngOnInit(): void {
   
    
    
    
    

  }
  
}
