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
        "img": "assets/HomePage/Carosel/ganpati.webp"
      },
      {
        "id": 2,
        "img": "assets/HomePage/Carosel/ganpati1.webp"
      },
      {
        "id": 2,
        "img": "assets/HomePage/Carosel/ganpati2.webp"
      }
    ]
  }

  getArtiPhoto(){
    return[
      {
        "id": 1,
        "img": "assets/2020_Arti/1.webp",
        "title":"Pawar Sir",
        
      },
      {
        "id": 2,
        "img": "assets/2020_Arti/2.webp",
        "title":"Pradip Tanpure Sir",
        
      },
      {
        "id": 3,
        "img": "assets/2020_Arti/3.webp",
        "title":"Sahebrao Dawkhar ",
        
      },
      {
        "id": 4,
        "img": "assets/2020_Arti/4.webp",
        "title":"Changdev Marbhal Sir",
        
      },
      {
        "id": 5,
        "img": "assets/2020_Arti/5.webp",
        "title":"Bacchav Sir",
        
      },
      {
        "id": 6,
        "img": "assets/2020_Arti/6.webp",
        "title":"sunil tanpure",
        
      },
      {
        "id": 7,
        "img": "assets/2020_Arti/7.webp",
        "title":"deepak dawkhar",
        
      },
      {
        "id": 8,
        "img": "assets/2020_Arti/8.webp",
        "title":"Khajindar Sir",
        
      },
      {
        "id": 9,
        "img": "assets/2020_Arti/9.webp",
        "title":"gaurav chothe sir",
        
      },
      {
        "id": 10,
        "img": "assets/2020_Arti/10.webp",
        "title":"Mahindra Korde",
        
      },
      {
        "id": 11,
        "img": "assets/2020_Arti/11.webp",
        "title":"Dnyaneshwar Kirdak",
        
      },
      {
        "id": 12,
        "img": "assets/2020_Arti/12.webp",
        "title":"Sarang Sir",
        
      },
      {
        "id": 13,
        "img": "assets/2020_Arti/13.webp",
        "title":"Badakh Sir",
        
      },
      {
        "id": 14,
        "img": "assets/2020_Arti/14.webp",
        "title":"Mogal",
        
      },
      {
        "id": 15,
        "img": "assets/2020_Arti/15.webp",
        "title":"Panchasara ",
        
      },
      {
        "id": 16,
        "img": "assets/2020_Arti/16.webp",
        "title":"pratap Jadhav",
        
      }
    ]
  }
}
