import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {WorksComponent} from "./works/works.component";
import {CommunicationComponent} from "./communication/communication.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: 'works', loadChildren: () => import('./works/works.module').then(m => m.WorksModule)},
  {path: 'communication', loadChildren: () => import('./communication/communication.module').then(m => m.CommunicationModule)},
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [WorksComponent, HomeComponent, CommunicationComponent]
