import { Product } from "./product";

interface CartStore {
  items: Product[];
  count: number;
  addToCart: (product: Product) => void;
  clearCart: () => void;
}


export default CartStore;