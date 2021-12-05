import {AfterViewInit, Component} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {

  title = 'ng-portfolio';

  ngAfterViewInit(): void {
    let myName = document.getElementById('myName');
    let arrow = document.getElementById('bounce');
    window.addEventListener('wheel', function (e) {
      var opacityOfText = $(myName).css("opacity");
      var sizeOfText = parseInt($(myName).css("font-size"),10) + e.deltaY/12.6;

      if (sizeOfText < 90)(sizeOfText = 90)
      console.log(parseInt($(myName).css("font-size"),10))
      console.log(e.deltaY)
      console.log(sizeOfText)
      $(myName).css("opacity", opacityOfText - e.deltaY/1260).css("font-size", sizeOfText + "px")

    });

    $(window).scroll(function () {
      $(arrow).css("opacity", $(document).height() - $(window).scrollTop() - $(window).height() - 50);
    });
  }
}


