import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from "shared";

import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { DropdownComponent } from "./dropdown/dropdown.component";

const routes: Routes = [
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
  },
  {
    path: "product",
    loadChildren: () =>
      import("./products/products.module").then((m) => m.ProductsModule),
  },
  { path: "", component: WelcomeComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    DropdownComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
