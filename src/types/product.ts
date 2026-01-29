export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  height: string;
  width: string;
  material: string;
  soldOut?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}
