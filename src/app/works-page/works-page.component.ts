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
          <div style="background: url('{{work.backroundUrl}}') no-repeat; background-size: cover;">
            <img src="{{work.logoUrl}}" alt="" class="logo">
            <h1 class="header" id="companyName">{{work.name}}</h1>
            <p class="definition">{{work.definition}}</p>
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
      logoUrl: "../../assets/arcelikLogoBackground.jpg",
      backroundUrl: "../../assets/arcelikWorkBackground.jpg",
      definition: "Definition",
    },
    {
      name: "Çarşıbaşı",
      logoUrl: "",
      backroundUrl: "../../assets/underWorkBackground.jpg",
      definition: "Definition",
    },
    {
      name: "Penti B2C",
      logoUrl: "../../assets/pentiLogoBackground.jpg",
      backroundUrl: "../../assets/pentiWorkBackground.jpg",
      definition: "Definition",
    }
  ];


  ngOnInit(): void {
    document.getElementById("worksLink")?.classList.add("current");
  }
}
