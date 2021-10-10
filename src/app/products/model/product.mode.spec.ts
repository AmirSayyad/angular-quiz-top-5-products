import { Product } from "./product.model";

const data = [
  {
    id: "14ea3aef-7afe-478e-98af-9e42e3b9f990",
    title: "Generic Soft Keyboard",
    category: "3dd19955-32de-4aa9-bd63-60c21070c1cc",
    description:
      "Ratione eaque consectetur rerum rerum voluptatem. Ab doloremque aut eaque velit enim ut. Consectetur voluptatem esse dolorem placeat possimus qui quod autem. Dolor enim iste rerum. Illum necessitatibus dolore quae quia pariatur consequatur facilis saepe veritatis. Consequatur odit architecto.",
    images: [
      "https://source.unsplash.com/1600x900/?Keyboard",
      "https://source.unsplash.com/1600x900/?Keyboard",
      "https://source.unsplash.com/1600x900/?Keyboard"
    ],
    variants: [
      {
        id: "22e30edf-a31c-4e9d-9123-5102c0b1df57",
        quantity: 5,
        title: "Rubber",
        sku: "14ea3aef-7afe-478e-98af-9e42e3b9f990-Rubber"
      },
      {
        id: "69033ac8-8320-4e6b-87ae-70d07b112098",
        quantity: 3,
        title: "Wooden",
        sku: "14ea3aef-7afe-478e-98af-9e42e3b9f990-Wooden"
      }
    ],
    price: "190.00",
    tags: [
      "Gorgeous",
      "Rustic",
      "Ergonomic",
      "Unbranded",
      "Rustic",
      "Sleek",
      "Awesome",
      "Incredible"
    ]
  }
];
describe("Product", () => {
  it("should create product from product data", () => {
    expect(Product.createFromAPI(data)).toBeTruthy();
  });
});
