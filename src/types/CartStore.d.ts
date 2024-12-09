import { Product } from './product';

export interface CartStore {
  items: Product[];
  total: number;
  count: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}
