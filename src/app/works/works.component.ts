import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {WorksService} from "../works.service";
import {Work} from "../work";

@Component({
  selector: 'app-works',
  template: `
    <div class="frame"></div>
      <ng-container *ngFor="let work of works">
          <div class="work">  
            <a class="companyName" href="{{ work.baseURL }}" target="_blank"><span class="companyName" style="color: {{ work.styleColor }}">{{ work.name }}</span></a>
            <p class="description" style="color: {{ work.styleColor }}">{{ work.definition }}</p>
            <div class="wrapper">   
              <img src="{{work.backGroundUrl}}" alt="">
            </div>
          </div>
      </ng-container>`,
  styleUrls: ['./works.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WorksComponent implements OnInit {

  works: Work[]= [];

  constructor(private worksService: WorksService) { }

  ngOnInit(): void {
    this.getHeroes();
    document.getElementById("worksLink")?.classList.add("current");
  }

  getHeroes(): void{
    this.worksService.getWorks()
      .subscribe(works => this.works = works)
  }
}
