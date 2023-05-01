export interface Product {
  product: string;
  cost: number;
  description: string;
  quantity: number;
}

export interface ProductAPIList {
  status: boolean;
  data: Product[];
}

export interface ProductAPIProductOne {
  status: boolean;
  data: Product;
}
