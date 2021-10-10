import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  @Input() product: any;
  public productImageUrl: string;
  
  constructor() {}

  ngOnInit(): void {
    // Use first image in product's image list as display image
    this.productImageUrl = `url(${this.product.images[0]})`;
  }
}
