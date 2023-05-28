import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/cv',
    pathMatch: "full"
  },
  {
    path: 'cv',
    loadChildren: () => import('./pages/cv/cv.module').then((m) => m.CvModule)
  },
  {path: '**', redirectTo: 'error/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
