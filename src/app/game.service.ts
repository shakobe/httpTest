import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const headers = new Headers({ 'Authorization': 'Basic' + btoa('9a77c935-fcc7-4709-a441-1386a6' + ":" + 'MYSPORTSFEEDS') });
  const options = new RequestOptions({ headers: this.headers });
  const url = 'https://api.mysportsfeeds.com/v2.0/pull/nfl/2018-regular/week/1/games.json'

@Injectable({
  providedIn: 'root'
})
export class GameService {


  constructor(private http: HttpClient) { }

  getGames() {
    return this
        .http
        .get(`${this.url}/games`);
  }
}
