import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameapiService {

  constructor(private httpclient: HttpClient) { }

  getGames():Observable<any>{
    return this.httpclient.get("http://stage.whgstage.com/front-end-test/games.php");
  }

  getGamesByGameName(gameName:string): Observable<any>{
    let param1 = new HttpParams().set("game",gameName);
    return this.httpclient.get("http://stage.whgstage.com/front-end-test/jackpots.php",{params:param1});
  }
}