"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useFavouriteStore } from "@/store/useFavouriteStore";
import { useCartStore } from "@/store/useCartStore";
import { useHasHydrated } from "@/hooks/useHasHydrated";

export default function Favourites() {
  const hasHydrated = useHasHydrated();

  const favourites = useFavouriteStore((s) => s.favourites);
  const toggleFavourite = useFavouriteStore((s) => s.toggleFavourite);

  const cart = useCartStore(s => s.cart);

  const toggleCart = useCartStore((s) => s.toggleCart);

  const [allItems, setAllItems] = useState<any[]>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("allItems") || "[]");
    setAllItems(items);
  }, []);

  if (!hasHydrated) return null;

  const favouriteItems = allItems.filter((item: any) =>
    favourites.includes(Number(item.id))
  );
  return (
    <div className="p-4 bg-purple-400 min-h-screen mb-5 rounded">
      <div className="flex flex-col">
      <Link href="/" className="text-white hover:underline w-fit mb-2">
        ← Back to Home
      </Link>
       <Link href="about-us" className="text-white hover:underline w-fit mb-2">
        ← About Us
      </Link>
       <Link href="new-items" className="text-white hover:underline w-fit mb-2">
        ← New Items Page
      </Link>
      </div>

      <h1 className=" text-2xl text-center font-medium md:text-3xl md:font-bold mb-4">Favourites</h1>

      {favouriteItems.length === 0 && (
        <p className="text-xl text-black text-center">No favourites yet.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {favouriteItems.map((item: any) => (
          <div key={item.id} className="border-2 p-4 rounded bg-white flex flex-col items-start mt-auto h-full">
            <img
              src={item.image}
              className="w-full max-h-55 mb-2"
            />
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p>{item.description}</p>
            <p className="font-bold">{item.price}</p>

            {/* ❤️ Favourite */}
            <button
              onClick={() => toggleFavourite(String(item.id))}
              className="text-2xl mt-2 "
            >
              {favourites.includes(Number(item.id)) ? "💖" : "🤍"}
            </button>

            {/* 🛒 Cart */}
            <div className="mt-auto text-white">
              {cart[String(item.id)] ? (
                <button
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 mt-2 rounded-lg"
                  onClick={() => toggleCart(String(item.id))}
                >
                  REMOVE FROM CART
                </button>
              ) : (
                <button
                  className="bg-purple-500 hover:bg-purple-600 px-4 py-2 mt-2 rounded-lg"
                  onClick={() => toggleCart(String(item.id))}
                >
                  ADD TO CART
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
