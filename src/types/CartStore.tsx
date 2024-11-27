import { Product } from './product';

interface CartStore {
  items: Product[];
  count: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

export default CartStore;
