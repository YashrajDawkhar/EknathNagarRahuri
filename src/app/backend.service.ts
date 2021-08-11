import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class BackendService {


  constructor(private http: HttpClient) { }

  getCarosel() {
    return [
      {
        "id": 1,
        "img": "assets/HomePage/Carosel/ganpati.png"
      },
      {
        "id": 2,
        "img": "assets/HomePage/Carosel/ganpati1.png"
      },
      {
        "id": 2,
        "img": "assets/HomePage/Carosel/ganpati2.png"
      }
    ]
  }
}
