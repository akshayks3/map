import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiaMapComponent } from './india-map/india-map.component';
import { HttpClientModule } from '@angular/common/http';
import { StateMapComponent } from './state-map/state-map.component';

@NgModule({
  declarations: [
    AppComponent,
    IndiaMapComponent,
    StateMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
