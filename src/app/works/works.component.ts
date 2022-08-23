import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import SwiperCore, {Pagination, Navigation, SwiperOptions} from "swiper";
import {WorksService} from "../works.service";
import {Work} from "../work";
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-works',
  template: `
  <div class="works">
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
              <a href="{{ work.baseURL }}" target="_blank"><span class="companyName" style="color: {{work.styleColor}}">{{work.name}}</span></a>
              <p class="definition" style="color: {{work.styleColor}}">{{work.definition}}</p>
            </div>
          </div>
        </ng-template>
      </ng-container>
    </swiper>
    </div>`,
  styleUrls: ['./works.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WorksComponent implements OnInit {

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
