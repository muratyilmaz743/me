import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works-page',
  templateUrl: './works-page.component.html',
  styleUrls: ['./works-page.component.sass']
})
export class WorksPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*TODO it scrolling but freezes when scrolled too much*/
    window.addEventListener('wheel', function (e) {
      let firstRow = document.getElementById('firstRow');
      let secondRow = document.getElementById('secondRow');
      if (e.deltaY < 0){
        // @ts-ignore
        firstRow.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      }else {
        // @ts-ignore
        secondRow.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      }

    })
  }

}
