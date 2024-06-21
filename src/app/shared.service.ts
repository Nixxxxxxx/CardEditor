import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../environments/environment';

// This works although it is highlighted here as an error
@Injectable({
  providedIn: 'root'
})

export class SharedService {
    // readonly APIUrl = "http://raspberrypi2.local:8880/api";
    //  readonly APIUrl = "http://localhost:5127/api";

    // readonly APIUrl = "http://192.168.2.86:8880/api";
    //  readonly APIUrl = "http://145.14.157.137:8880/api";

    APIUrl: string = environment.apiEndpoint;
    constructor(private http: HttpClient) {}

    getCardList(): Observable < any[] > {
        return this.http.get < any > (this.APIUrl + '/Cards/all');
    }

    getGridList(): Observable < any[] > {
      return this.http.get < any > (this.APIUrl + '/Grids');
  }


  getCard(val: any): Observable < any > {
    return this.http.get < any > (this.APIUrl + '/Cards/' + val);
  }

  getGrid(val: any): Observable < any > {
  return this.http.get < any > (this.APIUrl + '/Grids/' + val);
  }

    addCard(val: any) {
        return this.http.post(this.APIUrl + '/Cards', val);
    }

    addGrid(val: any) {
      return this.http.post(this.APIUrl + '/Grids', val);
  }

  updateCard(val: any) {
    return this.http.put(this.APIUrl + '/Cards', val);
  }

  updateGrid(val: any) {
   return this.http.put(this.APIUrl + '/Grids', val);
  }

    deleteCard(id: any) {
      return this.http.delete(this.APIUrl + '/Cards/' + id);
    }

    deleteGrid(id: any) {
      return this.http.delete(this.APIUrl + '/Grids/' + id);
    }
}
