import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: 'Noise Smartwatch', price: '₹2,499', rating: 4.5 },
  { id: 2, name: 'Redmi Earbuds', price: '₹1,199', rating: 4.2 },
  { id: 3, name: 'Bluetooth Speaker', price: '₹1,799', rating: 4.7 },
];

export default function NuShopping() {
  return (
    <div className="p-6 space-y-6">
        <Link
          to="/"
          className="mb-6 inline-block text-sm text-gray-600 hover:text-black transition"
        >
          ← Back to Home
        </Link>
      <h1 className="text-3xl font-bold text-pink-600">Nu Shopping</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 shadow-lg rounded-2xl hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 mt-1">{product.price}</p>
            <div className="flex items-center mt-2 text-yellow-500">
              <Star size={18} />
              <span className="ml-1">{product.rating}</span>
            </div>
            <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg flex items-center gap-2 hover:bg-pink-600">
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
