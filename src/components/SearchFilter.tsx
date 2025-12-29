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
  function handleSerach(){
    if(input === ""){
      alert("Please Enter Something");
      return;
    };
    if(productsitems.length > 0){
      alert("No Products Found");
    };
  }

  return (
    <>
      <div className="bg-gray-900 flex justify-center items-center p-2 gap-2 ">
        <input
          className="w-[50%] md:w-[60%] p-2 border-2 border-white rounded bg-gray-800 text-white"
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="px-3 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded"onClick={handleSerach}>Search</button>
      </div>

      <div className="text-white">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-gray-800 rounded my-2 flex flex-col items-center"
          >
            <img src={item.image} className="w-[30%] mb-2" />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.rating}</p>

            {/* ❤️ Favourite */}
            <button
              onClick={() => toggleFavourite(String(item.id))}
              className="mt-2"
            >
              {favourites.includes(String(item.id)) ? "💖" : "🤍"}
            </button>

            {/* 🛒 Cart */}
            {cart[String(item.id)] ? (
              <button
                className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg mt-3 w-[10%]"
                onClick={() => toggleCart(String(item.id))}
              >
                ✔️ Done
              </button>
            ) : (
              <button
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg mt-3 w-[20%]"
                onClick={() => toggleCart(String(item.id))}
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
