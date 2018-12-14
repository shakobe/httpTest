import { Component, OnInit } from '@angular/core';
// import { Game, GameService } from './game.service';
import { Observable } from 'rxjs';
import { GameService } from './game.service';
import { MyPicks } from './mypicks.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  gamesTest: Array<any>;
  referencesTest: Array<any>;
  picksTest: Array<any>;

  constructor(public gameService: GameService, public myPicksService: MyPicks) { }

  getData() {

    this.myPicksService.getMyPicks()
      .subscribe(
        burritos => {
          this.picksTest = burritos['picks'];
        },
        error => {
          console.log(error);
        },
        () => {
          console.log('ITEMS!');
          this.gameService.getGames()
            .subscribe(
              tacos => {
                this.gamesTest = tacos['games'];
                this.referencesTest = tacos['references']['teamReferences'];
              },
              error => {
                console.log(error);
              },
              () => {
                console.log('next ', this.gamesTest);
              }
            );

        }
      );
  }

  isPickedCSS(id) {
    if (_.some(this.picksTest, {'pick': id})) {
      return true;
    } else {
      return false;
    }
  }

  getSpread(id) {
    const spread = _.find(this.picksTest, {'pick': id}).spread;
    if (_.isNumber(spread)) {
      return spread;
    } else {
      return '';
    }
  }

  getCustomCSS(game) {
    if (game.score.awayScoreTotal != null) {
      if (this.isPickedCSS(game.schedule.awayTeam.id)) {
        const spread = this.getSpread(game.schedule.awayTeam.id);
        if ((game.score.awayScoreTotal - game.score.homeScoreTotal) > -spread ) {
          return 'winner';
        } else if ((game.score.awayScoreTotal - game.score.homeScoreTotal) < -spread) {
            return 'loser';
          } else if ((game.score.awayScoreTotal - game.score.homeScoreTotal) === -spread) {
            return 'tie';
          }
      } else {
        const spread = this.getSpread(game.schedule.homeTeam.id);
        if ((game.score.homeScoreTotal - game.score.awayScoreTotal) > -spread ) {
          return 'winner';
        } else if ((game.score.homeScoreTotal - game.score.awayScoreTotal) < -spread) {
            return 'loser';
          } else if ((game.score.homeScoreTotal - game.score.awayScoreTotal) === -spread) {
            return 'tie';
          }
      }
    }
  }

  // why does this for each loop repeat twice if log interations to console
  getTotals() {
    let wins = 0;
    // let losses = 0;
    // let ties = 0;

    _.forEach(this.gamesTest, function(g, index) {
      if (g.score.awayScoreTotal != null) {
        wins++;
        // console.log('hihih: ', index);
      }
    });
    return wins;
  }

  getWeek() {
    return this.gamesTest[0].schedule.week;
  }

  time_left(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;

    return minutes + ':' + ('0' + seconds).slice(-2);
  }

  teamName(team) {
    let city = '';
    _.forEach(this.referencesTest, function(key) {
      if (key.id === team) {
        city = key.city;
      }
    });
    if (team === 51) { city = 'NY Jets'; }
    if (team === 53) { city = 'NY Giants'; }
    if (team === 75) { city = 'LA Chargers'; }
    if (team === 77) { city = 'LA Rams'; }

    return city;
  }

  ngOnInit() {
    this.getData();
  }
}

