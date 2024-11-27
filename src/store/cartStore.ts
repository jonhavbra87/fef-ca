import { create } from 'zustand';
import CartStore from '../types/CartStore';

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  count: 0,
  addToCart: (product) =>
    set((state) => ({
      items: [...state.items, product],
      count: state.count + 1,
    })),
  removeFromCart: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
      count: state.count > 0 ? state.count - 1 : 0,
    })),
  clearCart: () => set({ items: [], count: 0 }),
}));
