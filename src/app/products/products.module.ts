import { NgModule, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { ProductService } from "./product.service";

import { ProductInsertComponent } from "./product-insert/product-insert.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { AppService } from "../app.service";
import { tap } from "rxjs";
import { WelcomeComponent } from "../user/welcome/welcome.component";

const productGuard = () => {
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
  {
    path: "insert",
    component: ProductInsertComponent,
    canActivate: [productGuard],
  },
  {
    path: "list",
    component: ProductsListComponent,
    canActivate: [productGuard],
  },
  { path: "", component: WelcomeComponent, canActivate: [productGuard] },
];

@NgModule({
  declarations: [ProductInsertComponent, ProductsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ProductService],
})
export class ProductsModule {}
