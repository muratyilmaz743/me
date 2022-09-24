import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {WorksService} from "../works.service";
import {Work} from "../work";

@Component({
  selector: 'app-works',
  template: `
    <div id="frame"></div>
      <ng-container *ngFor="let work of works">
          <div class="work" id="{{work.name}}-work">  
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
  currentPosition: number = 0;

  constructor(private worksService: WorksService) { }

  ngOnInit(): void {
    var animationIsDone = true;
    var works = document.getElementsByClassName("work");
    var position = this.currentPosition;
    this.getHeroes();
    document.getElementById("worksLink")?.classList.add("current");
  
    window.addEventListener('wheel', function(e){
      if(animationIsDone){    

        var scrollDir = e.deltaY < 0  ? "up" : "down";

        if(scrollDir === "up" && position !== 0){
          animationIsDone = false;
          preventScroll(e);
          position--;
          scroll(position,works);        
        }else if(scrollDir === "down" && position !== works.length-1){   
          animationIsDone = false;
          preventScroll(e);     
          position++;
          scroll(position,works);
        }

        setTimeout(function() {
          animationIsDone = true;
      }, 2000);
      }
    });
  }

  getHeroes(): void{
    this.worksService.getWorks()
      .subscribe(works => this.works = works)
  }
}

function scroll(index: number, listOfElements: HTMLCollection){
  listOfElements[index].scrollIntoView();
}

function isInFrame(myElement: Element){
  var boundingOfElement = myElement.getBoundingClientRect();  

  return (boundingOfElement.top == 0);
}

function preventScroll(event: Event) {

  event.preventDefault();
  event.stopPropagation();
}

