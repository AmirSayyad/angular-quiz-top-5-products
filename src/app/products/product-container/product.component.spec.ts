import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductConatinerComponent } from "./product-container.component";

describe("ProductConatinerComponent", () => {
  let component: ProductConatinerComponent;
  let fixture: ComponentFixture<ProductConatinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductConatinerComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductConatinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
