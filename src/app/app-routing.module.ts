import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {WorksPageComponent} from "./works-page/works-page.component";
import {CommunicationPageComponent} from "./communication-page/communication-page.component";
import {LinksPageComponent} from "./links-page/links-page.component";

const routes: Routes = [
  {path: 'works', component: WorksPageComponent},
  {path: 'communication', component: CommunicationPageComponent},
  {path: 'links', component: LinksPageComponent},
  {path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [WorksPageComponent, HomePageComponent, CommunicationPageComponent, LinksPageComponent]
