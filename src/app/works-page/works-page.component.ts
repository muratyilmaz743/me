import {Component, ViewEncapsulation, OnInit, ElementRef, ViewChild} from '@angular/core';

declare var $: any;
// import Swiper core and required modules
import SwiperCore, {Pagination, Navigation, SwiperOptions} from "swiper";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-works-page',
  template: `<swiper
    [config]="config"
    [spaceBetween]="30"
    [centeredSlides]="true"
    class="mySwiper">
    <ng-template swiperSlide>
      <div id="arcelikWork" style="background: url('../../assets/arcelikWorkBackground.jpg') no-repeat; background-size: cover; ">
        <img src="../../assets/arcelikLogoBackground.jpg" alt="" class="logo">
        <h4 class="header">Arçelik B2C</h4>
        <!--TODO TO BOTTOM-->
        <p class="definition"></p>
      </div>
    </ng-template>
    <ng-template swiperSlide>
      <div id="pentiWork" style="background: url('../../assets/pentiWorkBackground.jpg') no-repeat">
        <!--<img src="../../assets/pentiLogoBackground.jpg" alt="" class="logo">-->
        <h4 class="header">Penti</h4>
        <p class="definition"></p>
      </div>
    </ng-template>
    <ng-template swiperSlide>
      <div id="carsibasiWork" style="background: url('../../assets/underWorkBackground.jpg') no-repeat">
        <img src="../../assets/ÇarşıbaşıLogoBackground.jpg" alt="" class="logo">
        <h4 class="header">Çarşıbaşı B2C</h4>
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


  config: SwiperOptions = {
    slidesPerView: 1,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      820: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView:4,
      },
      2000: {
        slidesPerView:5,
      },
    }
  };
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
