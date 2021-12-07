import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinksPageComponent } from './links-page/links-page.component';
import { CommunicationPageComponent } from './communication-page/communication-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LinksPageComponent,
    CommunicationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
