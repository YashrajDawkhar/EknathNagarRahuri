import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-event-updates',
  templateUrl: './event-updates.component.html',
  styleUrls: ['./event-updates.component.css'],
})
export class EventUpdatesComponent implements OnInit {
  eventArray: any = [];
  
  constructor(private service: BackendService) {
    service.getEventUpdate().subscribe((data) => {
      this.eventArray = data;
    });
  }

  ngOnInit(): void { }

  eventDetails = new FormGroup({
    Date: new FormControl('', Validators.required),
    Desc: new FormControl(''),
    Img: new FormControl('https://source.unsplash.com/')
  });

  sucessMessage: boolean = false;
  errorMessage: boolean = false;
  delMessage: boolean = false;
  artiDetails() {
    console.log(this.eventDetails.value);
    
    this.service.postEventUpdate(this.eventDetails.value).subscribe(
      (data: any) => {
        this.eventArray.push(this.eventDetails.value);
        this.sucessMessage = true;
        this.delMessage = false;
        this.eventDetails.reset();
      },
      (error) => {
        this.errorMessage = true;
      }
    );
    this.sucessMessage = false;
    this.errorMessage = false;
  }

  delData(id: any, data: any) {
    this.service.deleteEventUpdate(id).subscribe(() => {
      this.delMessage = true;
      this.sucessMessage = false;
    });
    this.delMessage = false;

    let index = this.eventArray.indexOf(data);
    this.eventArray.splice(index, 1);
  }
}
