import { Link } from "react-router-dom";

export default function NordBankCard() {
  return (
    <div className="p-8 bg-gradient-to-r from-orange-50 via-orange-100 to-orange-200 rounded-lg shadow-lg">
        <Link to="/" className="inline-block mt-4 mb-6 bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-300">
  &larr; Go Back
</Link>

      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Get Your Nord Bank Card Today
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Make purchases worldwide with the Nord Bank Card. Whether online or in-store, earn rewards, enjoy exclusive benefits, and manage your spending effortlessly through our intuitive app.
      </p>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Card Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-orange-600">International Usage</h3>
            <p className="text-gray-600 mt-2">Make purchases globally with no fees, making your travel and online shopping a breeze.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-orange-600">Earn Cashback</h3>
            <p className="text-gray-600 mt-2">Earn cashback on eligible purchases and enjoy rewards every time you spend.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-orange-600">Contactless Payments</h3>
            <p className="text-gray-600 mt-2">Make fast and secure payments with the latest contactless payment technology.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-orange-600">24/7 Fraud Protection</h3>
            <p className="text-gray-600 mt-2">Stay secure with round-the-clock fraud protection for peace of mind.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">How to Apply for the Card</h2>
        <p className="text-lg text-gray-700 mb-6">
          Applying for the Nord Bank Card is simple. After opening your Nord Bank account, you can easily request your card through the mobile app or website.
        </p>

        <div className="text-center">
          <a
            href="#apply"
            className="inline-block mt-6 bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-3 rounded-md text-xl font-semibold shadow-lg hover:from-green-600 hover:to-green-800 transition duration-300 ease-in-out"
          >
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
}
