import { Component, OnInit } from '@angular/core';
import {GameapiService} from "../service/gameapi.service";
import { HttpClient } from '@angular/common/http';

import {Game} from "../class/game";
import {Jackport} from "../class/jackport";

@Component({
  selector: 'app-top-games',
  templateUrl: './top-games.component.html',
  styleUrls: ['./top-games.component.css']
})
export class TopGamesComponent implements OnInit {
  games : Game[];
  jackpot: any;

  constructor(private _gameapiService : GameapiService, private http:HttpClient) { }

  ngOnInit(): void {
    this._gameapiService.getGames()
      .subscribe(
        data => {
          this.games = data;
        }
      );

      let jresp =this.http.get("http://stage.whgstage.com/front-end-test/jackpots.php")
    jresp.subscribe((data) => this.jackpot = data);
      
  }

  getGamesByGameName(gameName:any):void{
    this._gameapiService.getGamesByGameName(gameName)
    .subscribe(
      data =>{
        this.jackpot = data;
      }
    )
  }

  

}
