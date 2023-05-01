import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  Product,
  ProductAPIList,
} from "projects/shared/src/lib/product.interfaces";
import { delay } from "rxjs";

const PRODUCT_API = "https://codingfactory.ddns.net/api/product";

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http
      .get<ProductAPIList>(`${PRODUCT_API}/findall`)
      .pipe(delay(1000));
  }

  insertProduct(product: Product) {
    return this.http.post<ProductAPIList>(`${PRODUCT_API}/create`, product);
  }
}
