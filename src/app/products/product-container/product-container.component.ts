import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { ProductService } from "../services/product.service";

@Component({
  selector: "app-product-container",
  templateUrl: "./product-container.component.html",
  styleUrls: ["./product-container.component.css"]
})
export class ProductConatinerComponent implements OnInit {
  public firstFiveProducts$: Observable<any[]>;
  loader = new Array<number>(5);

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadFirstFiveProducts();
  }

  /**
   * Calls product service to loads first five products
   * @returns {Void} Assigns promise response to variable firstFiveProducts$.
   */
  loadFirstFiveProducts() {
    this.firstFiveProducts$ = this.productService.getFirstFiveProducts();
  }
}
