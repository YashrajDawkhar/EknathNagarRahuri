import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardGuard } from '../login-guard.guard';
import { AartiNameComponent } from './aarti-name/aarti-name.component';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{ path: '', component: DashboardComponent ,canActivate:[LoginGuardGuard]},
{path:'arti',component:AartiNameComponent ,canActivate:[LoginGuardGuard]}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
