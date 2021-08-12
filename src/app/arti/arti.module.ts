import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtiRoutingModule } from './arti-routing.module';
import { ArtiComponent } from './arti.component';


@NgModule({
  declarations: [
    ArtiComponent
  ],
  imports: [
    CommonModule,
    ArtiRoutingModule
  ]
})
export class ArtiModule { }
