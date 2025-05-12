import { Link } from "react-router-dom";

export default function OpenFinance() {
  return (
    <div className="p-8 bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-200 rounded-lg shadow-lg">
        <Link to="/" className="inline-block mt-4 mb-6 bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-300">
  &larr; Go Back
</Link>

      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Unlock the Power of Open Finance
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Open Finance allows you to securely share your financial data with trusted third-party apps to receive personalized recommendations, making financial management smarter and more efficient.
      </p>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Benefits of Open Finance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-yellow-600">Personalized Recommendations</h3>
            <p className="text-gray-600 mt-2">Get tailored financial advice and services based on your unique financial situation and goals.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-yellow-600">Better Data Control</h3>
            <p className="text-gray-600 mt-2">Retain full control over your data while securely sharing only what’s necessary for enhanced recommendations.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-yellow-600">Access to Financial Services</h3>
            <p className="text-gray-600 mt-2">Gain access to a wide range of financial services and tools that can help optimize your finances.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">How It Works</h2>
        <p className="text-lg text-gray-700 mb-6">
          By enabling Open Finance, you can securely share your financial information with trusted third parties. This opens the door to more accurate financial advice, personalized offers, and better financial management.
        </p>

        <div className="text-center">
          <a
            href="#enable-open-finance"
            className="inline-block mt-6 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white px-8 py-3 rounded-md text-xl font-semibold shadow-lg hover:from-yellow-700 hover:to-yellow-900 transition duration-300 ease-in-out"
          >
            Enable Open Finance
          </a>
        </div>
      </section>
    </div>
  );
}
