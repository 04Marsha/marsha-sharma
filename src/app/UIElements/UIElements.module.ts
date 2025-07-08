import { NgModule } from "@angular/core";
import { LoaderComponent } from "./loader/loader.component";
import { SpotLightComponent } from "./spotlight/spotlight.component";

@NgModule({
    declarations: [SpotLightComponent, LoaderComponent],
    exports: [SpotLightComponent, LoaderComponent]
})

export class UIElementsModule {}