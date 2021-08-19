import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/dashboard/backend.service';


@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {

  arrayName: any = [];
  bootrapSpinner=true

  constructor(private service: BackendService) {
    this.service.getArtiName().subscribe((data) => {
      this.arrayName = data;
      this.bootrapSpinner =false
    })
    

  }

  ngOnInit(): void {


  }


}
