import { NgModule, LOCALE_ID } from '@angular/core';// LOCALE_ID is a token that is used to inject the locale into the application
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common'; // for datepicker
import * as fr from '@angular/common/locales/fr'; // <-- import locale fr

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' } // <-- register fr locale
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default); // <-- register fr locale
  }
}
