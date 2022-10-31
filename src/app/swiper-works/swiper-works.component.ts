import {Component, ViewEncapsulation, ViewChild, OnInit} from "@angular/core";
import {Work} from '../work';
import {WorksService} from '../works.service';
import SwiperCore, {Mousewheel, Pagination} from "swiper";


SwiperCore.use([Pagination, Mousewheel]);

@Component({
  selector: 'app-swiper-works',
  template: `
    <swiper
      [direction]="'vertical'"
      [pagination]="pagination"
      [mousewheel]=true
      class="mySwiper">
      <ng-container *ngFor="let work of works">
        <ng-template swiperSlide>
          <div class="work" id="{{work.name}}-work">
            <a class="companyName" href="{{ work.baseURL }}" target="_blank"><span class="companyName" style="color: {{ work.styleColor }}">{{ work.name }}</span></a>
            <p class="description" style="color: {{ work.styleColor }}">{{ work.definition }}</p>
            <div class="wrapper">
              <img src="{{work.backGroundUrl}}" alt="">
            </div>
          </div>
        </ng-template>
      </ng-container>
    </swiper>
    <div id="frame"></div>`,
  styleUrls: ['./swiper-works.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperWorksComponent implements OnInit {
  works: Work[] = [];
  currentPosition: number = 0;
  animationIsDone = true;

  pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
  };
  constructor(private worksService: WorksService) {
  }

  ngOnInit(): void {
    document.getElementById("worksLink")?.classList.add("current");

    this.getHeroes();

  }

  getHeroes(): void {
    this.worksService.getWorks()
      .subscribe(works => this.works = works)
  }

}
