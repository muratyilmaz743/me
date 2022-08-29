import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationComponent } from './communication.component';

const routes: Routes = [{ path: '', component: CommunicationComponent }];

type Constructor<T> = Function & { prototype: T }

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunicationRoutingModule { }
