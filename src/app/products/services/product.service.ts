import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

import { Product } from "../model/product.model";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private readonly apiUrl = environment.apiURL;

  constructor(private http: HttpClient) {}

  /**
   * Get first five products in the store
   *
   * - Makes a request to fetch all products
   * - Takes the first 5 products in the list
   * - Parses and returns them
   */
  public getFirstFiveProducts(): Observable<any[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      map((products: any[]) => {
        return products
          .slice(0, 5)
          .map((product) => Product.createFromAPI(product));
      })
    );
  }
}
