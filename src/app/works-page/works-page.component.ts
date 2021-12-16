import {Component, ViewEncapsulation, OnInit} from '@angular/core';

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
      <ng-template swiperSlide>
        Arçelik B2C Hybris Project
      </ng-template
      >
      <ng-template swiperSlide>
        Çarşıbaşı Kozmetik ve Tekstil | SAP Hybris B2C Project
      </ng-template
      >
      <ng-template swiperSlide>
        Penti E-Commerce Cloud B2C Projesi
      </ng-template
      >
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
