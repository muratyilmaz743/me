import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WorksService } from "../works.service";
import { Work } from "../work";

@Component({
  selector: 'app-works',
  template: `
      <ng-container *ngFor="let work of works">
          <div class="work" id="{{work.name}}-work">  
            <a class="companyName" href="{{ work.baseURL }}" target="_blank"><span class="companyName" style="color: {{ work.styleColor }}">{{ work.name }}</span></a>
            <p class="description" style="color: {{ work.styleColor }}">{{ work.definition }}</p>
            <div class="wrapper">   
              <img src="{{work.backGroundUrl}}" alt="">
            </div>
          </div>
      </ng-container>
      <div id="frame"></div>`,
  styleUrls: ['./works.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WorksComponent implements OnInit {

  works: Work[] = [];
  currentPosition: number = 0;
  animationIsDone = true;

  constructor(private worksService: WorksService) { }

  ngOnInit(): void {
    document.getElementById("worksLink")?.classList.add("current");
    var ts: number;
    var works = document.getElementsByClassName("work");

    this.getHeroes();

    window.addEventListener('touchstart', function (e) {
      ts = e.touches[0].clientY;
    });

    window.addEventListener('touchend', function (e) {
      var currentY = e.changedTouches[0].clientY;
      if (currentY > ts) {
        window.dispatchEvent(wheelEventDown)
      } else if (currentY < ts) {
        window.dispatchEvent(wheelEventUp)
      }
    });
      window.addEventListener('wheel', (e) => this.mainScroll(works, e));
  }

  getHeroes(): void {
    this.worksService.getWorks()
      .subscribe(works => this.works = works)
  }
  mainScroll = (works: HTMLCollection, e: WheelEvent) => {
    if (this.animationIsDone) {
      var scrollDir = e.deltaY < 0 ? "up" : "down";
      if (scrollDir === "up" && this.currentPosition !== 0) {
        this.animationIsDone = false;
        e.stopPropagation();
        this.currentPosition--;
        setTimeout(() => {scroll(this.currentPosition,works)},30)
      } else if (scrollDir === "down" && this.currentPosition !== works.length - 1) {
        this.animationIsDone = false;
        e.stopPropagation();
        this.currentPosition++;
        setTimeout(() => {scroll(this.currentPosition,works)},30) 
        //Not best practice, but couldn't resolve with promise, probably target is not coming.
      }

      setTimeout(() => { // Without this timeout, scrolls will be quite rush.  
        this.animationIsDone = true;
      }, 1500);
    }
  }
}

let scroll = ((index: number, listOfElements: HTMLCollection) => {
  listOfElements[index].scrollIntoView({ behavior: "smooth" });
})

let wheelEventUp = new WheelEvent('wheel', {
  deltaY: 1
});

let wheelEventDown = new WheelEvent('wheel', {
  deltaY: -1
});
