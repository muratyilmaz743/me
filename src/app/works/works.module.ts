import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksRoutingModule } from './works-routing.module';
import {SwiperModule} from "swiper/angular";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    WorksRoutingModule,
    SwiperModule
  ]
})
export class WorksModule { }
