"use client";

import type { Product } from "@/types/product";
import { useHasHydrated } from "@/hooks/useHasHydrated";
import { useState, useEffect } from "react";
import { useFavouriteStore } from "@/store/useFavouriteStore";
import { useCartStore } from "@/store/useCartStore";

interface Props {
  productsitems: Product[];
}

export default function SearchFilter({ productsitems }: Props) {
  const favourites = useFavouriteStore((s) => s.favourites);
  const toggleFavourite = useFavouriteStore((s) => s.toggleFavourite);

  const cart = useCartStore((s) => s.cart);
  const toggleCart = useCartStore((s) => s.toggleCart);

  const [input, setInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!input.trim()) {
      setFilteredProducts([]);
      return;
    }

    const filtered = productsitems.filter((item) =>
      item.title
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(input.toLowerCase().replace(/\s+/g, ""))
    );

    setFilteredProducts(filtered);
  }, [input, productsitems]);

  const hasHydrated = useHasHydrated();
  if (!hasHydrated) return null;
  function handleSerach() {
    if (input === "") {
      alert("Please Enter Something");
      return;
    };
    if (productsitems.length > 0) {
      alert("No Products Found");
    };
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full">
        <div className="fixed flex justify-center items-center p-2 gap-2 w-full bg-gray-900 shadow shadow-purple-400 z-50">
          <input
            className="w-[50%] md:w-[60%] p-2 border-2 border-white rounded bg-gray-800 text-white"
            placeholder="Search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="px-3 py-2 bg-white hover:bg-white/80 text-white rounded" onClick={handleSerach}>🔍</button>
        </div>
      </div>

      <div className="text-white">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="px-4 py-2 shadow-2xl shadow-purple-600 bg-gray-800 rounded flex flex-col items-center"
          >
            <img src={item.image} className="w-[35%] mb-2 mt-25 rounded" />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.rating}</p>

            {/* ❤️ Favourite */}
            <button
              onClick={() => toggleFavourite(Number(item.id))}
              className="mt-2"
            >
              {favourites.includes(Number(item.id)) ? "💖" : "🤍"}
            </button>

            {/* 🛒 Cart */}
           {cart[Number(item.id)] ? (
  <button
    className="bg-blue-400 hover:bg-blue-500 text-white px-4 rounded-lg mt-3 
               w-[50%] md:w-[20%] h-10 flex items-center justify-center"
    onClick={() => toggleCart(String(item.id))}
  >
    ✔️
  </button>
) : (
  <button
    className="bg-purple-500 hover:bg-purple-600 text-white px-4 rounded-lg mt-3 
               w-[50%] md:w-[20%] h-10 flex items-center justify-center"
    onClick={() => toggleCart(Number(item.id))}
  >
    ADD TO CART
  </button>
)}

          </div>
        ))}
      </div>
    </>
  );
}
