import {Component, ViewEncapsulation, OnInit, ElementRef, ViewChild} from '@angular/core';

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
      (swiper)="onSwiper($event)"
      (slideChange)="onSlideChange()"
      class="mySwiper">
      <ng-template swiperSlide>
        <img src="../../assets/arcelikBackground.png" alt="arcelik"/>
        <h2 (click)="onClickArcelik()" #arcelikHeader id="arcelikHeader" >Arçelik B2C Hybris Project</h2>
      </ng-template>
      <ng-template swiperSlide>
        <img src="../../assets/underWorkBackground.jpg" alt="onwork"/>
        <h2 (click)="onClickCarsi()" #carsiHeader id="carsiHeader">Çarşıbaşı Kozmetik ve Tekstil | SAP Hybris B2C Project
        <i>OnWork</i>
        </h2>
      </ng-template>
      <ng-template swiperSlide>
        <img src="../../assets/underWorkBackground.jpg" alt="onwork"/>
        <h2 (click)="onClickPenti()" #pentiHeadeer id="pentiHeadeer">Penti E-Commerce Cloud B2C Projesi
            <i>OnWork</i>
        </h2>
      </ng-template>
    </swiper>`,
  styleUrls: ['./works-page.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class WorksPageComponent implements OnInit {
  @ViewChild('arcelikHeader') arcelikHeader: ElementRef | undefined
  @ViewChild('carsiHeader') carsiHeader: ElementRef | undefined
  @ViewChild('pentiHeadeer') pentiHeadeer: ElementRef | undefined


  constructor() {
  }

  ngOnInit(): void {

  }

  onSlideChange() {
    console.log('slide change');
  }

  onSwiper(swiper: any) {
  }

  onClickArcelik() {
    console.log(this.arcelikHeader)
  }

  onClickCarsi() {
    console.log(this.carsiHeader)
  }

  onClickPenti() {
    console.log(this.pentiHeadeer)
  }
}
