import React from 'react';
import { Bitcoin, TrendingUp, TrendingDown } from 'lucide-react';
import { Link } from "react-router-dom";

export default function NordBankCrypto() {
  const coins = [
    { name: 'Bitcoin', symbol: 'BTC', price: '₹48,00,000', change: '+2.5%' },
    { name: 'Ethereum', symbol: 'ETH', price: '₹3,25,000', change: '-1.2%' },
    { name: 'Solana', symbol: 'SOL', price: '₹9,000', change: '+4.0%' },
  ];

  return (
    <div className="p-6 space-y-4">
         <Link
                  to="/"
                  className="mb-6 inline-block text-sm text-gray-600 hover:text-black transition"
                >
                  ← Back to Home
                </Link>
      <h1 className="text-3xl font-bold text-yellow-600">Nord Bank Crypto</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {coins.map((coin) => (
          <div key={coin.symbol} className="bg-white shadow-md p-4 rounded-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold">{coin.name}</h2>
                <p className="text-sm text-gray-500">{coin.symbol}</p>
              </div>
              <Bitcoin className="text-yellow-500" />
            </div>
            <div className="mt-3">
              <p className="text-xl">{coin.price}</p>
              <p
                className={`text-sm ${
                  coin.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                } flex items-center`}
              >
                {coin.change.startsWith('+') ? <TrendingUp /> : <TrendingDown />}
                <span className="ml-1">{coin.change}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
