import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavouriteStore {
  favourites: Number[];
  toggleFavourite: (id: number | string) => void;
  isFavourite: (id: number | string) => boolean;
}

export const useFavouriteStore = create<FavouriteStore>()(
  persist(
    (set, get) => ({
      favourites: [],
      toggleFavourite: (id) =>
        set((state) => {
          const safeId = Number(id);
          const exists = state.favourites.includes(safeId);
          return {
            favourites: exists
              ? state.favourites.filter((f) => f !== safeId)
              : [...state.favourites, safeId],
          };
        }),
      isFavourite: (id) => get().favourites.includes(Number(id)),
    }),
    {
      name: "favourites-storage", // localStorage key
    }
  )
);

