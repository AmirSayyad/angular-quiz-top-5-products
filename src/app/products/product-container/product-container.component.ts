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

  // Load first five products in store
  loadFirstFiveProducts() {
    this.firstFiveProducts$ = this.productService.getFirstFiveProducts();
  }
}
