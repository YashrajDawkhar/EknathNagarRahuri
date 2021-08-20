import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  days:any;
  hour:any;
  min:any;
  sec:any;

  constructor() { }

  ngOnInit(): void {

    const countDownDate = new Date("Sep 10, 2021 12:00:00").getTime();

   let x = setInterval(()=>{

    const currentDate = new Date().getTime();

    let distance =countDownDate - currentDate;

    this.days =Math.floor(distance /(1000 * 60 * 60 * 24));
    this.hour= Math.floor((distance % (1000 * 60 *60 *24))/(1000*60*60));
    this.min =Math.floor((distance % (1000 * 60 *60))/(1000*60));
    this.sec =Math.floor((distance % (1000 * 60 ))/(1000));

    if(distance<0){
      clearInterval(x);
    }

   },1000)
  
   

  }

}
