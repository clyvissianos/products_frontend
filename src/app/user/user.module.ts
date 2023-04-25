import { NgModule, inject } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { UserService } from "./user.service";
import { AppService } from "../app.service";

import { UsersListComponent } from "./users-list/users-list.component";
import { UserInsertComponent } from "./user-insert/user-insert.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { tap } from "rxjs";

const userGuard = () => {
  const router = inject(Router);
  const service = inject(AppService);
  return service.isLoggedIn$.pipe(
    tap((isLoggedIn) => {
      if (!isLoggedIn) router.navigate(["/login"]);
      // return !isLoggedIn ? router.navigate(["/login"]) : true;
    })
  );
};

const routes: Routes = [
  { path: "list", component: UsersListComponent, canActivate: [userGuard] },
  { path: "insert", component: UserInsertComponent, canActivate: [userGuard] },
  { path: "", component: WelcomeComponent, canActivate: [userGuard] },
];

@NgModule({
  declarations: [UsersListComponent, UserInsertComponent, WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
})
export class UserModule {}
