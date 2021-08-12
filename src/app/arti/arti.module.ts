import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtiRoutingModule } from './arti-routing.module';
import { ArtiComponent } from './arti.component';
import {CardModule} from 'primeng/card';
import {RippleModule} from 'primeng/ripple';

@NgModule({
  declarations: [
    ArtiComponent
  ],
  imports: [
    CommonModule,
    ArtiRoutingModule,
    CardModule,
    RippleModule
  ]
})
export class ArtiModule { }
