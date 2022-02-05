import {Component, ViewEncapsulation, OnInit} from '@angular/core';
// import Swiper core and required modules
import SwiperCore, {Pagination, Navigation, SwiperOptions} from "swiper";
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-works-page',
  template: `
    <swiper
      [config]="config"
      [spaceBetween]="30"
      [centeredSlides]="true"
      class="mySwiper">
      <ng-container *ngFor="let work of works">
        <ng-template swiperSlide>
          <div style="background: url('{{work.backGroundUrl}}') no-repeat center; background-size: cover;">
            <img src="{{work.logoUrl}}" alt="" class="logo">
            <div class="wrapper">
              <span class="companyName" style="color: {{work.styleColor}}">{{work.name}}</span>
              <p class="definition" style="color: {{work.styleColor}}">{{work.definition}}</p>
            </div>
          </div>
        </ng-template>
      </ng-container>
    </swiper>`,
  styleUrls: ['./works-page.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class WorksPageComponent implements OnInit {
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
        slidesPerView: 4,
      },
      2000: {
        slidesPerView: 5,
      },
    }
  };

  public works = [
    {
      name: "Arçelik B2C",
      styleColor: "#cf9eac",
      logoUrl: "../../assets/arcelikLogoBackground.png",
      backGroundUrl: "../../assets/arcelikWorkBackground.jpg",
      definition: "Definition",
    },
    {
      name: "Çarşıbaşı",
      styleColor: "#474554",
      logoUrl: "../../assets/carsibasiLogoBackground.png",
      backGroundUrl: "../../assets/underWorkBackground.jpg",
      definition: "Definition",
    },
    {
      name: "Penti B2C",
      styleColor: "#475675",
      logoUrl: "../../assets/pentiLogoBackground.png",
      backGroundUrl: "../../assets/pentiWorkBackground.jpg",
      definition: "Definition",
    }
  ];


  ngOnInit(): void {
    document.getElementById("worksLink")?.classList.add("current");
  }
}
