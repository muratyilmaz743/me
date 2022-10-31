import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {CommunicationComponent} from "./communication/communication.component";
import {HomeComponent} from "./home/home.component";
import { SwiperWorksModule } from './swiper-works/swiper-works.module';

const routes: Routes = [
  {path: 'communication', loadChildren: () => import('./communication/communication.module').then(m => m.CommunicationModule)},
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)}
];

@NgModule({
  imports: [
    SwiperWorksModule,
    RouterModule.forRoot(
    routes,
    {
      useHash: false,
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [HomeComponent, CommunicationComponent]
