import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL;
  constructor(private http: HttpClient) {
    this.baseURL = 'https://damp-springs-42468.herokuapp.com/api';
   }

   getMatchHistory(username) {
     let url = this.buildURL('/player/history/', username);
     this.makeRequest(url)
     .subscribe((data) => {
       console.log(data);
     })
   }

   private buildURL(method, data) {
     return (this.baseURL + method + data);
   }

   private makeRequest(url) {
      return this.http.get(url);
   }
}
