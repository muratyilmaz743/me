import {Component, ViewEncapsulation, OnInit, ElementRef, ViewChild} from '@angular/core';

declare var $: any;
// import Swiper core and required modules
import SwiperCore, {Pagination, Navigation} from "swiper";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-works-page',
  template: `<swiper
    [slidesPerView]="3"
    [spaceBetween]="30"
    [centeredSlides]="true"
    class="mySwiper">
    <ng-template swiperSlide>
      <div id="arcelikWork">
        <img src="" alt="" id="logo">
        <h4 class="header"></h4>
        <p class="definition"></p>
      </div>
    </ng-template>
    <ng-template swiperSlide>
      <div id="pentiWork">
        <img src="" alt="" id="logo">
        <h4 class="header"></h4>
        <p class="definition"></p>
      </div>
    </ng-template>
    <ng-template swiperSlide>
      <div id="carsibasiWork">
        <img src="" alt="" id="logo">
        <h4 class="header"></h4>
        <p class="definition"></p>
      </div>
    </ng-template>
  </swiper>`,
  styleUrls: ['./works-page.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class WorksPageComponent implements OnInit {
  @ViewChild('arcelikHeader') arcelikHeader: ElementRef | undefined
  @ViewChild('carsiHeader') carsiHeader: ElementRef | undefined
  @ViewChild('pentiHeader') pentiHeader: ElementRef | undefined
  @ViewChild('arcelikContent') arcelikContent: ElementRef | undefined


  constructor(private modalService: NgbModal) {

  }

  ngOnInit(): void {
    document.getElementById("worksLink")?.classList.add("current");
  }

  onSwiper(swiper: any) {
  }

  openContent(content: any) {
    //TODO MOVE METHODS to here for modal move

  }
}
