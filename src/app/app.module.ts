import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AnimationBuilder } from '@angular/animations'
import { FormsModule } from '@angular/forms';
import { MatCardModule,MatDialog, MatDialogModule} from '@angular/material';
import { AppComponent } from './app.component';
import { MultiPlayerGameComponent } from './multi-player-game/multi-player-game.component';
import { MultiPlayerLeaderBoardComponent } from './multi-player-leader-board/multi-player-leader-board.component';
import { AppRoutingModule } from './routing';
import { MultiPlayerRulesComponent } from './multi-player-rules/multi-player-rules.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiPlayerService } from './multi-player.service';
import { MatchingUserService } from './matching-user.service';

import {HttpClientModule} from "@angular/common/http";
import { MultiPlayerResultComponent } from './multi-player-result/multi-player-result.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiPlayerGameComponent,
    MultiPlayerLeaderBoardComponent,
    MultiPlayerRulesComponent,
    MultiPlayerResultComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatCardModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule
    
  ],
  entryComponents: [
    MultiPlayerRulesComponent
  ],
  providers: [ MultiPlayerService,MatchingUserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
