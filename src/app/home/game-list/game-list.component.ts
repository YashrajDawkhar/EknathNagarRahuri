import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
  
})
export class GameListComponent implements OnInit {
  events1:any= [];

  constructor() { }

  ngOnInit(): void {
    this.events1 = [
      {status: 'Sangit Khurchi', date: '15/10/2020 10:30', color: '#9C27B0', image: 'game-controller.jpg'},
      {status: 'Rangoli', date: '15/10/2020 14:00', color: '#673AB7'},
      {status: 'Drawing', date: '15/10/2020 16:15', color: '#FF9800'},
      {status: 'Dance', date: '16/10/2020 10:00', color: '#607D8B'}
  ];
  }

}
