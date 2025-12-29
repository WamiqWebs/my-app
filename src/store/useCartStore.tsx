import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartStore {
  cart: Record<string, boolean>;
  toggleCart: (id: number | string) => void;
  isInCart: (id: number | string) => boolean;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: {},

      toggleCart: (id) =>
        set((state) => {
          const safeId = String(id);
          return {
            cart: {
              ...state.cart,
              [safeId]: !state.cart[safeId],
            },
          };
        }),

      isInCart: (id) => !!get().cart[String(id)],
    }),
    {
      name: "cart-storage", // localStorage key
    }
  )
);
