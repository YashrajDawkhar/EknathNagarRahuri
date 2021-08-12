import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtiComponent } from './arti.component';

const routes: Routes = [{ path: '', component: ArtiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtiRoutingModule { }
