import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { Game } from './game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpTest';
  games: Game[];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this
      .gameService
      .getGames()
      .subscribe((data: Game[]) => {
        this.games = data;
        console.log(data);
      });
  }
}
