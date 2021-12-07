import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let myName = document.getElementById('myName');
    let arrow = document.getElementById('bounce');
    let button = document.getElementById('buttons');

    window.addEventListener('wheel', function (e) {
      var wheelDir = wheelCalculator(e.deltaY);
      var opacityVal = $(myName).css("opacity") - wheelDir;

      var sizeOfText = parseInt($(myName).css("font-size")) + wheelDir * 100;

      if (sizeOfText < 94) (sizeOfText = 94)

      $(myName).css("opacity", opacityVal).css("font-size", sizeOfText + "px")
      $(button).css("opacity", 1 - opacityVal);

      if ($(button).css("opacity") > 0) {
        $(button).css("pointer-events", "auto")
      }else{
        $(button).css("pointer-events","none")
      }


    });

    function wheelCalculator(wheelDelta: number) {
      if (wheelDelta > 0) return 0.1;
      else if (wheelDelta < 0) return -0.1;
      else return 0;
    }

    $(window).scroll(function () {
      $(arrow).css("opacity", $(document).height() - $(window).scrollTop() - $(window).height() - 50);
    });
  }

}
