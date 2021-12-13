import {Component, NgModule, OnInit} from '@angular/core';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [SwiperModule],
})

export class YourAppModule {}

@Component({
  selector: 'app-works-page',
  templateUrl: './works-page.component.html',
  styleUrls: ['./works-page.component.scss']
})
export class WorksPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
