"use client";
import Link from "next/link";
import Products from "@/components/Products";
import { useState, useEffect } from "react";

export default function NewItems() {

  const [cart, setCart] = useState<{ [key: number]: boolean }>({});

  // new products array
  const newProducts = [
    { id: 25, image: "/bmshirt.png", title: "Cool Shirt", description: "Stylish shirt", price: "₹900" },
    { id: 26, image: "/newshoes.png", title: "Running Shoes", description: "Lightweight shoes", price: "₹1200" },
    { id: 27, image: "/summershirt.png", title: "Summer Shirt", description: "Perfect for summer", price: "₹800" },
    { id: 28, image: "/leatherjacket.png", title: "Leather Jacket", description: "Premium leather", price: "₹2500" },
    { id: 29, image: "/blacknjacket.png", title: "Leather Jacket", description: "Premium leather", price: "₹2500" },
    { id: 30, image: "/njacket.png", title: "Leather Jacket", description: "Premium leather", price: "₹2500" },
    { id: 31, image: "/leatherjacket.png", title: "Leather Jacket", description: "Premium leather", price: "₹2500" },
  ];

  // CART toggle
  const toggleCart = (id: number) => {
    setCart(prev => {
      const updated = { ...prev, [id]: !prev[id] };
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  // load cart on first render
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  return (
    <>
      <div className=" bg-purple-600 rounded">
        <div className="p-5 flex flex-col">
          <Link href="/" className="text-white hover:underline w-fit mb-2">
            ← Back to Home
          </Link>
          <Link href="favourites" className="text-white hover:underline w-fit mb-2">
            ← Fav Page
          </Link>
        </div>
        <div className="text-center text-2xl font-medium md:text-3xl md:font-bold text-red-500 gap-4">
          New Items
        </div>
        <Products
          items={newProducts}
          color={false}
        />
        
      </div>
    </>
  );
}
