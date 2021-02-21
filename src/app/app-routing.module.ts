import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{GamesComponent} from './games/games.component';
import { BlackjackComponent} from './blackjack/blackjack.component';
import {JackpotsComponent} from "./jackpots/jackpots.component";
import {LiveComponent} from "./live/live.component";
import {NewGamesComponent} from "./new-games/new-games.component";
import {PockerComponent} from "./pocker/pocker.component";
import {RouletteComponent} from "./roulette/roulette.component";
import {SlotsComponent} from "./slots/slots.component";
import {TableComponent} from "./table/table.component";
import{TopGamesComponent} from "./top-games/top-games.component";

const routes: Routes = [
  {
    path:'',
    redirectTo: '/topgames',
    pathMatch:'full' 
  },
  {
    path:'other',
    component:GamesComponent
  },
  {
    path:'blackjack',
    component:BlackjackComponent
  },
  {
    path:'jackpots',
    component:JackpotsComponent
  },
  {
    path:'live',
    component:LiveComponent
  },
  {
    path:'newgame',
    component:NewGamesComponent
  },
  {
    path:'pocker',
    component:PockerComponent
  },
  {
    path:'roulette',
    component:RouletteComponent
  },
  {
    path:'slots',
    component:SlotsComponent
  },
  {
    path:'table',
    component:TableComponent
  },
  {
    path:'topgames',
    component:TopGamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
