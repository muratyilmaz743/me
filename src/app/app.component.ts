import {AfterViewInit, Component} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'ng-portfolio';

  ngAfterViewInit(): void {
    $('#mobileNavbar').click(() => {
      const mobileMenu = $('#navbar-sticky');
      if(mobileMenu.hasClass('hidden')){
        mobileMenu.removeClass('hidden')
      }else mobileMenu.addClass('hidden');
    });

  }
}


