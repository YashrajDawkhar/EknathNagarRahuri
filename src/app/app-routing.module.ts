import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtiComponent } from './arti/arti.component';
import { DonationComponent } from './donation/donation.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';

import { LoginGuardGuard } from './login-guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full',
  },
  {
    path: 'Home',
    // loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    component: HomeComponent,
  },
  {
    path: 'event',
    // loadChildren: () =>
    //   import('./event/event.module').then((m) => m.EventModule),
    component:EventComponent,
  },
  {
    path: 'Arti',
    // loadChildren: () => import('./arti/arti.module').then((m) => m.ArtiModule),
    component:ArtiComponent,
  },
  {
    path: 'donation',
    // loadChildren: () =>
    //   import('./donation/donation.module').then((m) => m.DonationModule),
    component:DonationComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [LoginGuardGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
