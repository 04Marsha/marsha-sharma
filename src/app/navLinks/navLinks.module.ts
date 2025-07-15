import { NgModule } from "@angular/core";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { WorkComponent } from "./work/work.component";
import { UIElementsModule } from "../UIElements/UIElements.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [AboutComponent, ContactComponent, WorkComponent],
    exports: [AboutComponent, ContactComponent, WorkComponent],
    imports: [ CommonModule, UIElementsModule, FormsModule]
})

export class NavLinksModule {}