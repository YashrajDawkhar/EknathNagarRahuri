import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginGuardGuard } from '../login-guard.guard';
import { AartiNameComponent } from './aarti-name/aarti-name.component';

import { DashboardComponent } from './dashboard.component';
import { DonationEditComponent } from './donation-edit/donation-edit.component';
import { DonationComponent } from './donation/donation.component';

const routes: Routes = [{ path: '', component: DashboardComponent ,canActivate:[LoginGuardGuard]},
{path:'arti',component:AartiNameComponent ,canActivate:[LoginGuardGuard]},
{path:'donation',component:DonationComponent ,canActivate:[LoginGuardGuard]},
{path:'update/:id',component:DonationEditComponent ,canActivate:[LoginGuardGuard]}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
