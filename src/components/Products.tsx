"use client";

import { useHasHydrated } from "@/hooks/useHasHydrated";
import { useEffect, useState } from "react";
import { useFavouriteStore } from "@/store/useFavouriteStore";
import { useCartStore } from "@/store/useCartStore";

interface ProductDivProps {
  items: {
    id: number;
    image: string;
    title: string;
    description: string;
    price: string;
  }[];

  showFavButton?: boolean;
  color?: boolean;

   
}

export default function Products({
  items,
  showFavButton = true,
  color = false,
}: ProductDivProps) {
  const [loading, setLoading] = useState(true);
  const [openCard, setOpenCard] = useState<any>(null);

  // ⭐ Zustand stores
  const favourites = useFavouriteStore((s) => s.favourites);
  const toggleFavourite = useFavouriteStore((s) => s.toggleFavourite);

  const toggleCart = useCartStore((s) => s.toggleCart);
  const isInCartOpenCard = useCartStore(
    (s) => s.isInCart(openCard?.id || "")
  );

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (openCard) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [openCard]);

  const hasHydrated = useHasHydrated();
  if (!hasHydrated) return null;

  return (
    <>
      {loading ? (
        <div className="animate-pulse p-4 bg-purple-200 rounded-lg min-h-[300px] flex flex-col items-center justify-center gap-3">
          <div className="w-full h-40 bg-purple-300 rounded"></div>
          <div className="w-full h-6 bg-purple-300 rounded"></div>
          <div className="w-1/2 h-4 bg-purple-300 rounded"></div>
          <div className="w-8 h-8 border-4 border-purple-300 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {/* Products Grid */}
          <div className="text-center gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-5">
            {items.map((product) => (
              <div
                key={product.id}
                onClick={() => setOpenCard(product)}
                className={`flex flex-col gap-3 border border-gray-300 rounded-lg p-3 cursor-pointer hover:shadow-lg ${
                  color
                    ? "hover:ring-2 hover:ring-purple-400"
                    : "hover:border-2 hover:border-red-400"
                } transition bg-gray-50`}
              >
                <img
                  className="max-h-52 transition duration-300 hover:scale-105 object-contain rounded-md bg-gray-200"
                  src={product.image}
                  alt={product.title}
                />
                <div className="mt-auto">
                  <h2 className="text-lg font-semibold text-purple-700">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Expanded Card */}
          {openCard && (
            <div className="fixed inset-0 bg-purple-900/50 backdrop-blur-sm flex items-center justify-center z-50">
              <div
                onClick={() => setOpenCard(null)}
                className="absolute inset-0"
              />

              <div className="relative bg-white p-6 rounded-3xl w-[90%] max-w-lg shadow-2xl">
                <button
                  className="absolute right-3 top-2 text-gray-500 text-2xl font-bold"
                  onClick={() => setOpenCard(null)}
                >
                  ✕
                </button>

                <img
                  src={openCard.image}
                  alt={openCard.title}
                  className="w-full h-60 object-contain rounded-md bg-gray-100"
                />

                <h2 className="text-2xl font-bold mt-4 text-purple-700">
                  {openCard.title}
                </h2>
                <p className="text-gray-700 mt-2">
                  {openCard.description}
                </p>
                <p className="text-lg text-red-600 font-semibold mt-2">
                  {openCard.price}
                </p>

                {/* Cart */}
                {isInCartOpenCard ? (
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg mt-4 w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCart(openCard.id);
                    }}
                  >
                    REMOVE FROM CART
                  </button>
                ) : (
                  <button
                    className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg mt-4 w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCart(String(openCard.id));
                    }}
                  >
                    ADD TO CART
                  </button>
                )}

                {/* ❤️ Favourite (Animated) */}
                {showFavButton && (
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavourite(String(openCard.id));
                      }}
                      className={`text-3xl transition-transform duration-200 ${
                        favourites.includes(String(openCard.id))
                          ? "scale-125"
                          : "scale-100"
                      }`}
                    >
                      <span
                        className={`inline-block transition-colors duration-200 ${
                          favourites.includes(String(openCard.id))
                            ? "text-pink-500 animate-pulse"
                            : "text-gray-400"
                        }`}
                      >
                        {favourites.includes(String(openCard.id))
                          ? "💗"
                          : "🤍"}
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
