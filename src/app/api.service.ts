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
     return this.makeRequest(url);
   }

   getGods() {
      let url = this.buildURL('/god', '');
      return this.makeRequest(url);
   }

   getItems() {
      let url = this.buildURL('/item', '');
      return this.makeRequest(url);
   }

   private buildURL(method, data) {
     return (this.baseURL + method + data);
   }

   private makeRequest(url) {
      return this.http.get(url);
   }
}
