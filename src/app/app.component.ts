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
      console.log($(button).css("opacity"))

    });

    function wheelCalculator(wheelDelta: number) {
      if (wheelDelta > 0) return 0.1;
      else if (wheelDelta < 0) return -0.1;
      else return 0;
    }

    $(window).scroll(function () {
      $(arrow).css("opacity", $(document).height() - $(window).scrollTop() - $(window).height() - 50);
    });

    // @ts-ignore
    button.addEventListener("click", function () {
      alert("murat hello")
    })
  }
}


