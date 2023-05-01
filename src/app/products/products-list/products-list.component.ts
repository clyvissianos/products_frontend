import { Component, OnDestroy, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { ProductAPIList } from "projects/shared/src/lib/product.interfaces";
import { Product } from "shared";
import { Subscription } from "rxjs";
import { orderBy } from "lodash-es";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.css"],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService) {}

  loading = false;
  productList: Product[] = [];
  subscription: Subscription | undefined;

  productSortType: "asc" | "desc" = "asc";
  costSortType: "asc" | "desc" = "asc";
  quantitySortType: "asc" | "desc" = "asc";

  ngOnInit(): void {
    console.log('Starting "findAll" API call');
    this.loading = true;
    this.subscription = this.productService.findAll().subscribe({
      next: (apiData: ProductAPIList) => {
        const { status, data } = apiData;
        this.productList = data;
        console.log(status, data);
      },
      error: (error) => {
        this.loading = false;
        console.log(error);
      },
      complete: () => {
        this.loading = false;
        console.log("API call completed");
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  toggleSort(key: string) {
    switch (key) {
      case "product":
        this.productSortType = this.productSortType === "asc" ? "desc" : "asc";
        this.productList = orderBy(
          this.productList,
          [key],
          [this.productSortType]
        );
        break;
      case "cost":
        this.costSortType = this.costSortType === "asc" ? "desc" : "asc";
        this.productList = orderBy(
          this.productList,
          [key],
          [this.costSortType]
        );
        break;
      case "quantity":
        this.quantitySortType =
          this.quantitySortType === "asc" ? "desc" : "asc";
        this.productList = orderBy(
          this.productList,
          [key],
          [this.quantitySortType]
        );
        break;
      default:
        break;
    }
  }
}
