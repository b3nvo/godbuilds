import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as gods from '../assets/gods.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL;
  constructor(private http: HttpClient) {
    this.baseURL = 'https://damp-springs-42468.herokuapp.com/api';
   }

   // tslint:disable-next-line: typedef
   getMatchHistory(username) {
     const url = this.buildURL('/player/history/', username);
     return this.makeRequest(url);
   }

   // tslint:disable-next-line: typedef
   getGods() {
      const url = this.buildURL('/god', '');
      return this.makeRequest(url);
   }

   // tslint:disable-next-line: typedef
   getItems() {
      const url = this.buildURL('/item', '');
      return this.makeRequest(url);
   }

   // tslint:disable-next-line: typedef
   getGodIdByName(name) {
      console.log('api', name);
      return this.makeRequest('../assets/gods.json');
   }

   // tslint:disable-next-line: typedef
   getRecommendedGodItems(id) {
      const url = this.buildURL('/item/god/', id);
      return this.makeRequest(url);
   }

   // tslint:disable-next-line: typedef
   private buildURL(method, data) {
     return (this.baseURL + method + data);
   }

   // tslint:disable-next-line: typedef
   private makeRequest(url) {
      return this.http.get(url);
   }
}
