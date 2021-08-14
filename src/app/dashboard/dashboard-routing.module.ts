import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AartiNameComponent } from './aarti-name/aarti-name.component';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{ path: '', component: DashboardComponent },
{path:'arti',component:AartiNameComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
