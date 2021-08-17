import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
  
})
export class GameListComponent implements OnInit {
  events:any= [];

  constructor() { }

  ngOnInit(): void {
    this.events = [
      {Desc: 'Sangit Khurchi lorem30 ajdjkas sajkgsdfjga sfhui sdh f sdg fkjasjfkajk sf sdajfjsgdjfjksagjkf asdgfjks gfs f', Date: '15/10/2020 10:30'},
      {Desc: 'Rangoli asdsafwesfec cdfusud wguis ', Date: '15/10/2020 14:00'},
      {Desc: 'Drawing', Date: '15/10/2020 16:15'},
      {Desc: 'Dance', Date: '16/10/2020 10:00'},
      {Desc: 'Sangit Khurchi', Date: '15/10/2020 10:30'},
      {Desc: 'Rangoli', Date: '15/10/2020 14:00'},
      {Desc: 'Drawing', Date: '15/10/2020 16:15'},
      {Desc: 'Dance', Date: '16/10/2020 10:00'},
      {Desc: 'Sangit Khurchi', Date: '15/10/2020 10:30'},
      {Desc: 'Rangoli', Date: '15/10/2020 14:00'},
      {Desc: 'Drawing', Date: '15/10/2020 16:15'},
      {Desc: 'Dance', Date: '16/10/2020 10:00'},
      {Desc: 'Sangit Khurchi', Date: '15/10/2020 10:30'},
      {Desc: 'Rangoli', Date: '15/10/2020 14:00'},
      {Desc: 'Drawing', Date: '15/10/2020 16:15'},
      {Desc: 'Dance', Date: '16/10/2020 10:00'},
      {Desc: 'Sangit Khurchi', Date: '15/10/2020 10:30'},
      {Desc: 'Rangoli', Date: '15/10/2020 14:00'},
      {Desc: 'Drawing', Date: '15/10/2020 16:15'},
      {Desc: 'Dance', Date: '16/10/2020 10:00'},
      {Desc: 'Sangit Khurchi', Date: '15/10/2020 10:30'},
      {Desc: 'Rangoli', Date: '15/10/2020 14:00'},
      {Desc: 'Drawing', Date: '15/10/2020 16:15'},
      {Desc: 'Yashraj Dawkhar', Date: '16/10/2020 10:00'},
  ];
  }

}
