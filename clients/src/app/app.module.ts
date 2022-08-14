import { NgModule, LOCALE_ID } from '@angular/core';// LOCALE_ID is a token that is used to inject the locale into the application
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common'; // for datepicker
import * as fr from '@angular/common/locales/fr'; // <-- import locale fr | si on veut changer encore la langue il suffit de changer fr par un auter ex: ca (canadien)

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProduitComponent } from './produit/produit.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FaceSnapListComponent,
    HeaderComponent,
    LandingPageComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
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
