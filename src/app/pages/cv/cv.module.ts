import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CvComponent} from './cv.component';
import {RouterModule} from "@angular/router";
import {FooterModule, IntroModule} from "../../copmonents";

@NgModule({
  declarations: [
    CvComponent],
  imports: [
    CommonModule,
    IntroModule,
    FooterModule,
    RouterModule.forChild([{path: '', component: CvComponent}])
  ]
})
export class CvModule {
}
