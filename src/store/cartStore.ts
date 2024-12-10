import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Product } from '../types/product';

// Definer typen for Zustand-butikken
interface CartStore {
  items: Product[];
  total: number;
  count: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

// Beregn totalbeløpet for handlekurven
const calculateTotal = (items: Product[]) =>
  items.reduce(
    (total, item) => total + item.discountedPrice * (item.quantity || 1),
    0
  );

const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [], // Liste over produkter i handlekurven
      total: 0, // Totalbeløpet for handlekurven
      count: 0, // Antall produkter i handlekurven

      // Legg til et produkt i handlekurven
      addToCart: (product: Product) => {
        set((state) => {
          const existingProduct = state.items.find(
            (item) => item.id === product.id
          );

          if (existingProduct) {
            existingProduct.quantity = (existingProduct.quantity || 1) + 1;
          } else {
            state.items.push({ ...product, quantity: 1 });
          }

          return {
            items: [...state.items],
            count: state.items.reduce(
              (total, item) => total + (item.quantity || 1),
              0
            ),
            total: calculateTotal(state.items),
          };
        });
      },

      // Fjern et produkt fra handlekurven
      removeFromCart: (productId: string) => {
        set((state) => {
          const filteredItems = state.items.filter(
            (item) => item.id !== productId
          );

          return {
            items: filteredItems,
            count: filteredItems.reduce(
              (total, item) => total + (item.quantity || 1),
              0
            ),
            total: calculateTotal(filteredItems),
          };
        });
      },

      // Oppdater antall for et produkt
      updateQuantity: (productId: string, quantity: number) => {
        set((state) => {
          const updatedItems = state.items.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          );

          return {
            items: updatedItems,
            count: updatedItems.reduce(
              (total, item) => total + (item.quantity || 1),
              0
            ),
            total: calculateTotal(updatedItems),
          };
        });
      },

      // Tøm hele handlekurven
      clearCart: () =>
        set({
          items: [],
          total: 0,
          count: 0,
        }),
    }),
    {
      name: 'cart-storage', // Navnet på lagringsnøkkelen
      storage: createJSONStorage(() => localStorage), // Bruk localStorage for persistens
    }
  )
);

export default useCartStore;
