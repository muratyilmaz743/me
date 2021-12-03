import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit{

  title = 'ng-portfolio';

  ngAfterViewInit(): void {
    let myName = document.getElementById('myName');
    let marsBack = document.getElementById('marsBack')
    window.addEventListener('scroll', function () {
      let value = window.scrollY;
      if(myName) (myName.style.marginTop = value + 4 + 'px')
      /*TODO ARKAPLAN SAĞA SOLA KAYABİLİR*/
    })
  }
}


