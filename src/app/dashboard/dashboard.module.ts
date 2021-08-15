import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AartiNameComponent } from './aarti-name/aarti-name.component';

import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DonationComponent } from './donation/donation.component';
import {InputNumberModule} from 'primeng/inputnumber';
import { DonationEditComponent } from './donation-edit/donation-edit.component';
@NgModule({
  declarations: [
    DashboardComponent,
    AartiNameComponent,
    NavBarComponent,
    DonationComponent,
    DonationEditComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule,
    InputNumberModule

  ]
})
export class DashboardModule { }
