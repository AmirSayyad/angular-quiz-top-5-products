import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { ProductListComponent } from "./product-list/product-list.component";
import { ProductConatinerComponent } from "./product-container/product-container.component";
import { ProductLoaderComponent } from "./product-loader/product-loader.component";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductConatinerComponent,
    ProductLoaderComponent
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [
    ProductListComponent,
    ProductConatinerComponent,
    ProductLoaderComponent
  ]
})
export class ProductsModule {}
