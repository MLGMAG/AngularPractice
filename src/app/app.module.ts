import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './components/nav/nav.component';
import { IndexComponent } from './components/index/index.component';
import { EventComponent } from './components/event/event.component';
import { HumanComponent } from './components/human/human.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    EventComponent,
    HumanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
