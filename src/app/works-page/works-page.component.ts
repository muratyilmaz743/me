import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {SwiperComponent} from "swiper/angular";

@Component({
  selector: 'app-works-page',
  template: `
    <swiper
      [slidesPerView]="3"
      [spaceBetween]="30"
      [pagination]="{
      clickable: true
    }"
      class="mySwiper"
    >
      <ng-template swiperSlide>Slide 1
      </ng-template
      >
      <ng-template swiperSlide>Slide 2
      </ng-template
      >
      <ng-template swiperSlide>Slide 3
      </ng-template
      >
      <ng-template swiperSlide>Slide 4
      </ng-template
      >
      <ng-template swiperSlide>Slide 5
      </ng-template
      >
      <ng-template swiperSlide>Slide 6
      </ng-template
      >
      <ng-template swiperSlide>Slide 7
      </ng-template
      >
      <ng-template swiperSlide>Slide 8
      </ng-template
      >
      <ng-template swiperSlide>Slide 9</ng-template>
    </swiper>`,
  styleUrls: ['./works-page.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class WorksPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

}
