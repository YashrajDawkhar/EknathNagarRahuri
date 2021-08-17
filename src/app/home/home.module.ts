import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TimeLineComponent } from './time-line/time-line.component';
import { GameListComponent } from './Event-updates/game-list.component';

import {TimelineModule} from 'primeng/timeline';
@NgModule({
  declarations: [
    HomeComponent,
    TimeLineComponent,
    GameListComponent
    
  
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, FormsModule, NgbModule,TimelineModule
  ]
})
export class HomeModule { }
