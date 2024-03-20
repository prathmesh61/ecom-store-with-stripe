import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type CartStore = {
  cart: CartItem[];
  add: (product: Product) => void;
  remove: (product: Product) => void;
};
export const useCartStore = create<CartStore>(
  persist(
    (set, get) => ({
      cart: [],
      add(product: Product) {
        const { cart } = get();
        const itemExists = cart.find((item) => item.id === product.id);
        if (itemExists) {
          itemExists.quantity++;
          set({ cart: [...cart] });
        } else {
          set({ cart: [...cart, { ...product, quantity: 1 }] });
        }
      },
      remove(product) {
        const { cart } = get();
        const itemExists = cart.find((item) => item.id === product.id);
        if (itemExists?.quantity! >= 2) {
          itemExists!.quantity--;
          set({ cart: [...cart] });
        } else {
          const item = cart.filter((item) => item.id !== product.id);
          set({ cart: item });
        }
      },
    }),
    { name: "cart" }
  )
);
