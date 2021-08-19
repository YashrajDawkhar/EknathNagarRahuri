import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TimeLineComponent } from './time-line/time-line.component';
import { GameListComponent } from './game-list/game-list.component';

import { TimelineModule } from 'primeng/timeline';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleriaModule } from 'primeng/galleria';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SkeletonModule } from 'primeng/skeleton';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [
    HomeComponent,
    TimeLineComponent,
    GameListComponent,
    GalleryComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    NgbModule,
    TimelineModule,
    GalleriaModule,
    FormsModule,
    ProgressSpinnerModule,
    SkeletonModule,
    RippleModule,
  ],
})
export class HomeModule {}
