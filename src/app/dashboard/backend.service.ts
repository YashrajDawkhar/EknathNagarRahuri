import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  url = "http://localhost:3000/artiName"
  constructor(private http:HttpClient) { }

  postArtiName(data:any){
    return this.http.post(this.url,data)
  }


}
