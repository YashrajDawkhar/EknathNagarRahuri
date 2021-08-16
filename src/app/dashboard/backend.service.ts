import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  url ="https://eknathnagar.herokuapp.com/artiName"


  constructor(private http:HttpClient) { }

  postArtiName(data:any){
    return this.http.post(this.url,data)
  }

  getArtiName(){
    return this.http.get(this.url);
  }

  delArtiName(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }


  urlDonation ="https://eknathnagar.herokuapp.com/donation"

  getDonation(){
    return this.http.get(this.urlDonation);
  }

  postDonation(data:any){
    
    return this.http.post(this.urlDonation,data)
  }

  deleteDonation(id:number){
    return this.http.delete(`${this.urlDonation}/${id}`)
  }

  getDonationByID(id:number){
    return this.http.get(`${this.urlDonation}/${id}`)
  }

  putDonationByID(id:number,data:any){
    return this.http.patch(`${this.urlDonation}/${id}`,data)
  }



}
