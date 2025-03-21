import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';


// Importation du locale FR
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import {HeaderComponent} from "./header/header.component";
import {FaceSnapComponent} from "./face-snap/face-snap.component";
import { LandingPageComponent } from './landing-page/landing-page.component';
import {SingleFaceSnapComponent} from "./single-face-snap/single-face-snap.component";
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";

// Enregistrement du locale
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleFaceSnapComponent,
    ContactComponent,
    AboutComponent,
    NotFoundComponent,
    MainHomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    // Définission de la langue en française
    { provide: LOCALE_ID, useValue: 'fr-FR' }

  ],
  bootstrap: [AppComponent],


})
export class AppModule { }
