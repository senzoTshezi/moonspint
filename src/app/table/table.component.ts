import { Component, OnInit } from '@angular/core';
import {GameapiService} from "../service/gameapi.service";

import {Game} from "../class/game";
import {Jackport} from "../class/jackport";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
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
