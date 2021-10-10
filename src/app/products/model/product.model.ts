export interface IProductVariant {
  id: string;
  quantity: number;
  title: string;
  sku: string;
}

export interface IProduct {
  id: string;
  title: string;
  category: string;
  description: string;
  price: string;
  images: string[];
  tags: string[];
  variants: IProductVariant[];
}

export class Product {
  public id: string;
  public title: string;
  public category: string;
  public description: string;
  public price: string;
  public images: string[];
  public tags: string[];
  public variants: IProductVariant[];

  constructor(product: IProduct) {
    this.id = product?.id ?? "";
    this.title = product?.title ?? "";
    this.category = product?.category ?? "";
    this.description = product?.description ?? "";
    this.price = product?.price ?? "";
    this.images = product?.images ?? [];
    this.tags = product?.tags ?? [];
    this.variants = product?.variants ?? [];
  }

  /**
   * Create product from API response product data
   * @param {any} product - API response product data
   * @returns {Product} Product
   */
  public static createFromAPI(product: any): Product {
    return new Product(product);
  }
}
