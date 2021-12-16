import {Component, ViewEncapsulation, OnInit} from '@angular/core';

// import Swiper core and required modules
import SwiperCore, {Pagination, Navigation} from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-works-page',
  template: `
    <swiper
      [pagination]="{type: 'progressbar'}"
      [navigation]="true"
      class="mySwiper">
      <ng-template swiperSlide>
        <img src="/src/assets/arcelikBackground.png" alt="arcelik"/>
        Arçelik B2C Hybris Project
      </ng-template>
      <ng-template swiperSlide>
        <img src="/src/assets/underWorkBackground.jpg" alt="onwork"/>
        Çarşıbaşı Kozmetik ve Tekstil | SAP Hybris B2C Project
        <span>OnWork</span>
      </ng-template>
      <ng-template swiperSlide>
        <img src="/src/assets/underWorkBackground.jpg" alt="onwork"/>
        Penti E-Commerce Cloud B2C Projesi
        <span>OnWork</span>
      </ng-template>
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
