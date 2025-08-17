import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { UIElementsModule } from '../UIElements/UIElements.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CertsComponent } from './certs/certs.component';
import { RouterModule } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    WorkComponent,
    CertsComponent,
    ExperienceComponent
  ],
  exports: [AboutComponent, ContactComponent, WorkComponent, CertsComponent],
  imports: [CommonModule, UIElementsModule, FormsModule, RouterModule],
})
export class NavLinksModule {}
