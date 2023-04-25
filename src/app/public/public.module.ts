import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", component: WelcomeComponent },
];

@NgModule({
  declarations: [LoginComponent, WelcomeComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class PublicModule {}
