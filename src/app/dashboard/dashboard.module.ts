import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AartiNameComponent } from './aarti-name/aarti-name.component';

import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    DashboardComponent,
    AartiNameComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule

  ]
})
export class DashboardModule { }
