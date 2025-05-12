import { Link } from "react-router-dom";

export default function Loans() {
  return (
    <div className="p-8 bg-gradient-to-r from-indigo-50 via-indigo-100 to-indigo-200 rounded-lg shadow-lg">
      <Link  to="/" className="inline-block mt-4 mb-6 bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-300">
  &larr; Go Back
</Link>

      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Get the Funds You Need with Nord Bank Loans
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Whether it's for personal use, home improvement, or business expansion, Nord Bank offers flexible loan options with competitive interest rates and quick approval.
      </p>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Loan Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-purple-700">Personal Loans</h3>
            <p className="text-gray-600 mt-2">
              Access funds for personal expenses with flexible repayment options and low interest rates.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-purple-700">Home Loans</h3>
            <p className="text-gray-600 mt-2">
              Finance your dream home with our affordable home loan options and competitive rates.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-purple-700">Auto Loans</h3>
            <p className="text-gray-600 mt-2">
              Get the car you've always wanted with flexible auto loan terms and quick approval.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-purple-700">Business Loans</h3>
            <p className="text-gray-600 mt-2">
              Expand your business with tailored business loan solutions that fit your needs and goals.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">How to Apply for a Loan</h2>
        <p className="text-lg text-gray-700 mb-6">
          Applying for a loan with Nord Bank is simple and quick. Fill out the online application, and our team will get back to you with a loan offer within 24 hours.
        </p>

        <div className="text-center">
          <a
            href="#apply"
            className="inline-block mt-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-md text-xl font-semibold shadow-lg hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out"
          >
            Apply for a Loan Now
          </a>
        </div>
      </section>
    </div>
  );
}
