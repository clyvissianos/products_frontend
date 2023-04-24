import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UiComponent } from "./ui.component";
import { DropdownComponent } from "./dropdown/dropdown.component";

@NgModule({
  declarations: [UiComponent, DropdownComponent],
  imports: [RouterModule],
  exports: [UiComponent],
})
export class UiModule {}
