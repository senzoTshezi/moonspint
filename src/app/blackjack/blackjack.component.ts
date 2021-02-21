import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.css']
})
export class BlackjackComponent implements OnInit {
  games : any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let resp =this.http.get("http://stage.whgstage.com/front-end-test/games.php")
    resp.subscribe((data) => this.games = data);
  }

}
