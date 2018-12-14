import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Game } from './game';
// import { map } from 'rxjs/operators';
import * as _ from 'lodash';

// const headers = new HttpHeaders({ 'Authorization': '9a77c935-fcc7-4709-a441-1386a6' } );
// const options = new RequestOptions({ headers: this.headers });
const MyUrl = 'https://api.mysportsfeeds.com/v2.0/pull/nfl/2018-regular/week/15/games.json';
const monkey = btoa('9a77c935-fcc7-4709-a441-1386a6' + ':' + 'MYSPORTSFEEDS');
// export interface Game {
//   id: number;
//   week: number;
//   endedTime: number;
//   teams: string;
// }
@Injectable({
  providedIn: 'root',
})
export class GameService {

  constructor(private http: HttpClient) { }

  getGames() {
    // return this.http.get<Game>(MyUrl, { headers: {'Authorization': 'Basic ' + monkey }});
    return this.http.get(MyUrl, { headers: {'Authorization': 'Basic ' + monkey }});
  }
}

