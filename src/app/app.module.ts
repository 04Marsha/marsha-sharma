import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UIElementsModule } from './UIElements/UIElements.module';
import { MyApproachComponent } from './myApproach/myApproach.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificatesComponent } from './Certificates/certificates.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ContactBtnComponent } from './contact-btn/contact-btn.component';
import { NavLinksModule } from './navLinks/navLinks.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    MyApproachComponent,
    ProjectsComponent,
    SkillsComponent,
    CertificatesComponent,
    ProfilesComponent,
    ContactBtnComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIElementsModule,
    NavLinksModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
