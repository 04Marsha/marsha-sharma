import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './navLinks/about/about.component';
import { WorkComponent } from './navLinks/work/work.component';
import { ContactComponent } from './navLinks/contact/contact.component';
import { CertsComponent } from './navLinks/certs/certs.component';
import { ExperienceComponent } from './navLinks/experience/experience.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: 'certs', component: CertsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
