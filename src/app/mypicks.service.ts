import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyPicks {

  constructor(private http: HttpClient) { }

  getMyPicks() {
    // return this.http.get<Game>(MyUrl, { headers: {'Authorization': 'Basic ' + monkey }});
    // return this.http.get('http://shakobe.com/httpTest/assets/db.json');
    return this.http.get('../assets/db.json');
  }
}
