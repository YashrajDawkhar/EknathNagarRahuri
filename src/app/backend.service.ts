import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  url="/assets/HomePage/Carosel/carosel.json"

  constructor(private http:HttpClient) { }

  getCarosel(){
   return this.http.get(this.url)
  }
}
