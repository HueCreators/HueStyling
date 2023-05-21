import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SitesModule} from "./sites/sites.module";
import {SafePipe} from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SitesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
