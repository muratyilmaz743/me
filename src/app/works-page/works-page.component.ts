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
    <ng-template swiperSlide>Arçelik</ng-template>
    <ng-template swiperSlide>Penti</ng-template>
    <ng-template swiperSlide>Çarşıbaşı</ng-template>
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

  onSlideChange() {
    console.log('slide change');
  }

  onSwiper(swiper: any) {
  }

  onClickHeader(elm: any) {
    let modal = $(elm).nextAll('.contents:first');
    let imgs = $("#exampleImages img");
    if (elm?.classList.contains('upped')) {
      // @ts-ignore
      elm.style.marginTop = "0";
      modal.css('marginTop', '120vmax');
      modal.addClass('upped')
      elm.classList.remove('upped')
      imgs.css("filter", "blur(4px)");

    } else {
      elm.classList.add('upped');
      modal.removeClass('upped');
      // @ts-ignore
      elm.style.marginTop = "-48vh";
      modal.css('marginTop', '10vmax');
      imgs.css("filter", "blur(0)");
    }
  }

  openContent(content: any) {
    //TODO MOVE METHODS to here for modal move

  }
}
