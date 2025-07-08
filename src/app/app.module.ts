import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UIElementsModule } from './UIElements/UIElements.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
