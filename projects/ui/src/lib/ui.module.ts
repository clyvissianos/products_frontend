import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { UiComponent } from "./ui.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { AlertComponent } from "./alert/alert.component";

@NgModule({
  declarations: [UiComponent, DropdownComponent, AlertComponent],
  imports: [BrowserModule, RouterModule],
  exports: [UiComponent, DropdownComponent, AlertComponent],
})
export class UiModule {}
