import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="p-6 bg-purple-900 rounded mb-25">
      <div className="flex flex-col py-1">
        <Link href="/" className="text-red-400 hover:underline w-fit mb-2">
          ← Back to Home
        </Link>
        <Link href="new-items" className="text-red-400 hover:underline w-fit mb-2">
          ← New Items Page
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <div className="text-white">
        <p className="leading-7">
          💠Welcome to our store! We aim to bring you the best quality products at
          fair prices. Our mission is simple — to provide a smooth shopping
          experience with items that are reliable, useful, and hand-picked with
          care.
        </p>

        <p className="mt-4 leading-7">
          💠We believe in honesty, customer satisfaction, and continuous improvement.
          Whether you're here to browse or buy, we appreciate your time and trust.
        </p>

        <p className="leading-7 mt-4">
       💠We offer quality products at fair prices with a smooth, reliable shopping experience.
          Built to make online shopping easy and enjoyable.
        </p>


        <p className="leading-7 mt-4">
          💠Our mission is to deliver the best experience to our customers.
        </p>

        <p className="leading-7 mt-4">
          💠Contact us for more information or explore our newest items.
        </p>

        <p className="mt-4 leading-7">
          💠Thank you for supporting our small business. Stay connected for new
          arrivals and exciting updates!
        </p>
      </div>
    </div>
  );
}
