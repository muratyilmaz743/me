import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    let myName = document.getElementById('myName');

    window.addEventListener('wheel', function (e) {
      var wheelDir = wheelCalculator(e.deltaY);
      var marginVal = parseInt($(myName).css("margin-top")) - wheelDir * 200;

      if (marginVal > 0) (marginVal = 0)
      if (marginVal < -190) (marginVal = -190)

      $(myName).css("margin-top", marginVal + 'px');
    });

    function wheelCalculator(wheelDelta: number) {
      if (wheelDelta > 0) return 0.3;
      else if (wheelDelta < 0) return -0.3;
      else return 0;
    }
  }

}
