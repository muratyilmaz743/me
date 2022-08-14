import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import SwiperCore, {Pagination, Navigation, SwiperOptions} from "swiper";
import {WorksService} from "../works.service";
import {Work} from "../work";
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
  works: Work[]= [];

  constructor(private worksService: WorksService) { }

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

  ngOnInit(): void {
    this.getHeroes();
    document.getElementById("worksLink")?.classList.add("current");
  }

  getHeroes(): void{
    this.worksService.getWorks()
      .subscribe(works => this.works = works)
  }
}
