import React from 'react';
import { Link } from "react-router-dom";

export default function NordBankPlus() {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-100 to-white min-h-screen">
        <Link
          to="/"
          className="mb-6 inline-block text-sm text-gray-600 hover:text-black transition"
        >
          ← Back to Home
        </Link>
      <h1 className="text-4xl font-bold text-blue-900 mb-6">Nord Bank+</h1>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Balance */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition">
          <div className="flex items-center space-x-3">
            <span className="text-green-600 text-2xl">💰</span>
            <h2 className="text-xl font-semibold">Account Balance</h2>
          </div>
          <p className="text-gray-700 mt-2 text-lg font-medium">₹1,25,000.00</p>
          <p className="text-sm text-gray-400 mt-1">Updated just now</p>
        </div>

        {/* Credit Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition">
          <div className="flex items-center space-x-3">
            <span className="text-purple-600 text-2xl">💳</span>
            <h2 className="text-xl font-semibold">Credit Card</h2>
          </div>
          <p className="text-gray-700 mt-2 text-lg font-medium">Due: ₹8,500</p>
          <button className="mt-3 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm">
            Pay Now
          </button>
        </div>

        {/* Quick Transfer */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition">
          <div className="flex items-center space-x-3">
            <span className="text-blue-500 text-2xl">🔁</span>
            <h2 className="text-xl font-semibold">Quick Transfer</h2>
          </div>
          <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
            Transfer Money
          </button>
        </div>

        {/* Monthly Spending */}
        <div className="bg-white shadow-lg rounded-2xl p-6 col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Spending Overview</h2>
          <div className="w-full h-24 bg-gradient-to-r from-green-300 to-blue-400 rounded-lg flex justify-center items-center text-white font-bold text-lg">
            📈 Coming Soon: Spending Graph
          </div>
        </div>

        {/* Income Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <div className="flex items-center space-x-3">
            <span className="text-yellow-500 text-2xl">📥</span>
            <h2 className="text-xl font-semibold">This Month's Income</h2>
          </div>
          <p className="text-gray-700 mt-2 text-lg font-medium">₹45,000.00</p>
        </div>

        {/* Actions Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Quick Actions</h2>
          <div className="flex flex-col gap-2">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
              Add Beneficiary
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm">
              Apply for Loan
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm">
              Block Card
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
