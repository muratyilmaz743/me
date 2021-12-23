import {Component, ViewEncapsulation, OnInit, ElementRef, ViewChild} from '@angular/core';
declare var $: any;
// import Swiper core and required modules
import SwiperCore, {Pagination, Navigation} from "swiper";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
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
        <h2 (click)="onClickHeader(this.arcelikHeader)" #arcelikHeader id="arcelikHeader">Arçelik B2C Hybris
          Project</h2>
      </ng-template>
      <ng-template swiperSlide>
        <img src="../../assets/underWorkBackground.jpg" alt="onwork"/>
        <h2 (click)="onClickHeader(this.carsiHeader)" #carsiHeader id="carsiHeader">Çarşıbaşı Kozmetik ve Tekstil | SAP Hybris B2C
          Project
          <i>OnWork</i>
        </h2>
      </ng-template>
      <ng-template swiperSlide>
        <img src="../../assets/underWorkBackground.jpg" alt="onwork"/>
        <h2 (click)="onClickHeader(this.pentiHeader)" #pentiHeader id="pentiHeader">Penti E-Commerce Cloud B2C Projesi
          <i>OnWork</i>
        </h2>
      </ng-template>
    </swiper>
    <ng-template #contents>
        <div class="container">
          <h2>Arçelik</h2>
          <div class="contentDetail">
            <p>Murat Yılmaz arçelik projesi</p>
          </div>
        </div>
    </ng-template>`,
  styleUrls: ['./works-page.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class WorksPageComponent implements OnInit {
  @ViewChild('arcelikHeader') arcelikHeader: ElementRef | undefined
  @ViewChild('carsiHeader') carsiHeader: ElementRef | undefined
  @ViewChild('pentiHeader') pentiHeader: ElementRef | undefined


  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {

  }

  onSlideChange() {
    console.log('slide change');
  }

  onSwiper(swiper: any) {
  }

  onClickHeader(elm: any){
    if (elm?.classList.contains('upped')) {
      // @ts-ignore
      elm.style.marginTop = "0";
      elm.classList.remove('upped')
    } else {
      elm?.classList.add('upped');
      // @ts-ignore
      elm?.style.marginTop = "-75vh";
    }
  }

  openContent(content: any) {

  }
}
