import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperWorksComponent } from './swiper-works.component';
import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SwiperWorksComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule.forChild([
      { path: 'works',
        component: SwiperWorksComponent
      },
  ]),

  ]
})
export class SwiperWorksModule { }
