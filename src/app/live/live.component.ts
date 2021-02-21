import { Component, OnInit } from '@angular/core';
import {GameapiService} from "../service/gameapi.service";

import {Game} from "../class/game";
import {Jackport} from "../class/jackport";

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {
  games : any;
  jackpot: any;
  constructor(private _gameapiService : GameapiService) { }

  ngOnInit(): void {
    this._gameapiService.getGames()
      .subscribe(
        data => {
          this.games = data;
        }
      )
  }

}
