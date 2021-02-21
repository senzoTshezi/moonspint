import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GamesComponent } from './games/games.component';
import { HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { TopGamesComponent } from './top-games/top-games.component';
import { NewGamesComponent } from './new-games/new-games.component';
import { SlotsComponent } from './slots/slots.component';
import { JackpotsComponent } from './jackpots/jackpots.component';
import { LiveComponent } from './live/live.component';
import { BlackjackComponent } from './blackjack/blackjack.component';
import { RouletteComponent } from './roulette/roulette.component';
import { TableComponent } from './table/table.component';
import { PockerComponent } from './pocker/pocker.component';
import {GameapiService} from './service/gameapi.service';


@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    FilterPipe,
    TopGamesComponent,
    NewGamesComponent,
    SlotsComponent,
    JackpotsComponent,
    LiveComponent,
    BlackjackComponent,
    RouletteComponent,
    TableComponent,
    PockerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [GameapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
