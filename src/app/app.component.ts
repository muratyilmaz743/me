import {AfterViewInit, Component} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit{

  title = 'ng-portfolio';

  ngAfterViewInit(): void {
    let myName = document.getElementById('myName');
    let arrow = document.getElementById('bounce');
    window.addEventListener('scroll', function () {
      let value = window.scrollY;
      if(myName) (myName.style.marginTop = value + 4 + 'px')
      /*TODO ARKAPLAN SAĞA SOLA KAYABİLİR*/
    });

    $(window).scroll(function() {
      $(arrow).css("opacity",$(document).height() - $(window).scrollTop() - $(window).height() - 50);
    });
  }
}


