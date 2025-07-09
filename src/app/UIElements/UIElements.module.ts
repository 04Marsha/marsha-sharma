import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';
import { SpotLightComponent } from './spotlight/spotlight.component';
import { HamburgerComponent } from './hamburger/hamburger.component';

@NgModule({
  declarations: [SpotLightComponent, LoaderComponent, HamburgerComponent],
  exports: [SpotLightComponent, LoaderComponent, HamburgerComponent],
})
export class UIElementsModule {}
