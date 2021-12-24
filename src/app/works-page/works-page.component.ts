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
        <div class="container-md contents" id="arcelikContent">
          <div class="contentDetail">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Pharetra sit
              amet aliquam id diam maecenas ultricies mi eget. Pulvinar neque laoreet suspendisse interdum consectetur
              libero id faucibus nisl. Vel pharetra vel turpis nunc eget lorem dolor. Ultricies mi eget mauris pharetra
              et ultrices neque ornare aenean. Pellentesque diam volutpat commodo sed. Egestas sed tempus urna et
              pharetra pharetra. Posuere ac ut consequat semper viverra nam libero justo. Enim diam vulputate ut
              pharetra. Ac auctor augue mauris augue neque gravida. Commodo viverra maecenas accumsan lacus vel. Mattis
              pellentesque id nibh tortor id aliquet lectus proin. Donec massa sapien faucibus et molestie ac feugiat
              sed lectus. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus.</p>
          </div>
        </div>
      </ng-template>
      <ng-template swiperSlide>
        <img src="../../assets/underWorkBackground.jpg" alt="onwork"/>
        <h2 (click)="onClickHeader(this.carsiHeader)" #carsiHeader id="carsiHeader">Çarşıbaşı Kozmetik ve Tekstil | SAP
          Hybris B2C
          Project
          <i>OnWork</i>
        </h2>
        <div class="container-md contents" id="carsiContent">
          <div class="contentDetail">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Pharetra sit
              amet aliquam id diam maecenas ultricies mi eget. Pulvinar neque laoreet suspendisse interdum consectetur
              libero id faucibus nisl. Vel pharetra vel turpis nunc eget lorem dolor. Ultricies mi eget mauris pharetra
              et ultrices neque ornare aenean. Pellentesque diam volutpat commodo sed. Egestas sed tempus urna et
              pharetra pharetra. Posuere ac ut consequat semper viverra nam libero justo. Enim diam vulputate ut
              pharetra. Ac auctor augue mauris augue neque gravida. Commodo viverra maecenas accumsan lacus vel. Mattis
              pellentesque id nibh tortor id aliquet lectus proin. Donec massa sapien faucibus et molestie ac feugiat
              sed lectus. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus.</p>
          </div>
        </div>
      </ng-template>
      <ng-template swiperSlide>
        <img src="../../assets/underWorkBackground.jpg" alt="onwork"/>
        <h2 (click)="onClickHeader(this.pentiHeader)" #pentiHeader id="pentiHeader">Penti E-Commerce Cloud B2C Projesi
          <i>OnWork</i>
        </h2>
        <div class="container-md contents" id="pentiContent">
          <div class="contentDetail">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Pharetra sit
              amet aliquam id diam maecenas ultricies mi eget. Pulvinar neque laoreet suspendisse interdum consectetur
              libero id faucibus nisl. Vel pharetra vel turpis nunc eget lorem dolor. Ultricies mi eget mauris pharetra
              et ultrices neque ornare aenean. Pellentesque diam volutpat commodo sed. Egestas sed tempus urna et
              pharetra pharetra. Posuere ac ut consequat semper viverra nam libero justo. Enim diam vulputate ut
              pharetra. Ac auctor augue mauris augue neque gravida. Commodo viverra maecenas accumsan lacus vel. Mattis
              pellentesque id nibh tortor id aliquet lectus proin. Donec massa sapien faucibus et molestie ac feugiat
              sed lectus. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus.</p>
          </div>
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

  }

  onSlideChange() {
    console.log('slide change');
  }

  onSwiper(swiper: any) {
  }

  onClickHeader(elm: any) {
    let modal = $(elm).nextAll('.contents:first');
    if (elm?.classList.contains('upped')) {
      // @ts-ignore
      elm.style.marginTop = "0";
      modal.css('marginTop', '120vmax');
      modal.addClass('upped')
      elm.classList.remove('upped')
    } else {
      elm.classList.add('upped');
      modal.removeClass('upped');
      // @ts-ignore
      elm.style.marginTop = "-48vh";
      modal.css('marginTop', '10vmax');
    }
  }

  openContent(content: any) {
    //TODO MOVE METHODS to here for modal move

  }
}
