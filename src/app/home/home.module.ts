import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TimeLineComponent } from './time-line/time-line.component';
import { GameListComponent } from './game-list/game-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    TimeLineComponent,
    GameListComponent
  
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, FormsModule, NgbModule
  ]
})
export class HomeModule { }
