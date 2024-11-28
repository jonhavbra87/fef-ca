import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Product } from '../types/product'; 
import CartStore from '../types/CartStore.d'; 

export const useCartStore = create(
  persist<CartStore>(
    (set) => ({

      items: [], 
      count: 0,  

      // Adds a product to the cart
      addToCart: (product: Product) =>
        set((state) => {
          // Check if the item already exists in the cart
          const itemExists = state.items.some((item) => item.id === product.id);
          if (itemExists) {
            return state; // Do not add duplicate items
          }
          return {
            items: [...state.items, product],
            count: state.count + 1,
          };
        }),

      // Removes a product from the cart
      removeFromCart: (productId: string) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId), 
          count: state.count > 0 ? state.count - 1 : 0, 
        })),

      // Clears the entire cart
      clearCart: () => set({ items: [], count: 0 }), // Empty the cart
    }),
    {
      name: 'cart-storage', // Name of the storage key
      storage: createJSONStorage(() => localStorage), // Use localStorage
      
    }
  )
);
