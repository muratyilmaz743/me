import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ng-portfolio';
}

let name = document.getElementById('myName');

window.addEventListener('scroll', function () {
  console.log(123);
  let value = window.scrollY;
  if(name) (name.style.marginTop = value + 4 + 'px')
})


