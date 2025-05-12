import { Link } from "react-router-dom";

export default function Investments() {
  return (
    <div className="p-8 bg-gradient-to-r from-green-50 via-green-100 to-green-200 rounded-lg shadow-lg">
        <Link  to="/" className="inline-block mt-4 mb-6 bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-300">
  &larr; Go Back
</Link>

      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Take Control of Your Financial Future with Nord Bank Investments
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Whether you're just starting your investment journey or are an experienced investor, Nord Bank offers tailored investment solutions to help you achieve your financial goals.
      </p>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Investment Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-700">Stocks and Bonds</h3>
            <p className="text-gray-600 mt-2">
              Invest in individual stocks and bonds for potential long-term growth.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-700">Mutual Funds</h3>
            <p className="text-gray-600 mt-2">
              Diversify your investments with mutual funds, offering a range of assets.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-700">REITs (Real Estate Investment Trusts)</h3>
            <p className="text-gray-600 mt-2">
              Invest in real estate without the hassle of property management through REITs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-700">Cryptocurrency</h3>
            <p className="text-gray-600 mt-2">
              Explore the world of digital currencies with our secure cryptocurrency investment options.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Invest with Nord Bank?</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <ul className="list-inside list-disc text-gray-700">
            <li className="mb-2">Low fees and commissions, maximizing your returns</li>
            <li className="mb-2">Diverse portfolio options to suit your risk profile</li>
            <li className="mb-2">Automatic portfolio rebalancing to keep your investments on track</li>
            <li className="mb-2">Expert investment advice tailored to your financial goals</li>
            <li className="mb-2">Secure and transparent platform for peace of mind</li>
          </ul>
        </div>

        <div className="text-center">
          <a
            href="#invest"
            className="inline-block mt-6 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-8 py-3 rounded-md text-xl font-semibold shadow-lg hover:from-yellow-600 hover:to-yellow-800 transition duration-300 ease-in-out"
          >
            Start Investing Now
          </a>
        </div>
      </section>
    </div>
  );
}
