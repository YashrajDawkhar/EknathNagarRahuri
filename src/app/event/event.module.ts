import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { ArtsComponent } from './arts/arts.component';
import { WinnerListComponent } from './winner-list/winner-list.component';


@NgModule({
  declarations: [
    EventComponent,
    ArtsComponent,
    WinnerListComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventModule { }
