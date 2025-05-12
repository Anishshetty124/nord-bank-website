import { Link } from "react-router-dom";

export default function Insurance() {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 rounded-lg shadow-lg">
        <Link to="/"  className="inline-block mt-4 mb-6 bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-300">
  &larr; Go Back
</Link>

      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Protect Your Future with Nord Bank Insurance
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Safeguard your loved ones, health, and assets with tailored insurance plans from Nord Bank.
        Explore our wide range of options designed to fit your needs and lifestyle.
      </p>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Insurance Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-indigo-700">Life Insurance</h3>
            <p className="text-gray-600 mt-2">
              Secure your family’s future with a comprehensive life insurance plan.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-indigo-700">Health Insurance</h3>
            <p className="text-gray-600 mt-2">
              Stay protected against medical expenses with our affordable health insurance options.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-indigo-700">Auto Insurance</h3>
            <p className="text-gray-600 mt-2">
              Keep your vehicle and loved ones safe with our comprehensive auto insurance coverage.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-indigo-700">Home Insurance</h3>
            <p className="text-gray-600 mt-2">
              Protect your home and belongings against unexpected events with our home insurance policies.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Nord Bank Insurance?</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <ul className="list-inside list-disc text-gray-700">
            <li className="mb-2">Affordable premiums tailored to your needs</li>
            <li className="mb-2">Wide range of coverage options for every life stage</li>
            <li className="mb-2">Quick and easy online claims process</li>
            <li className="mb-2">24/7 customer support for assistance and guidance</li>
            <li className="mb-2">Access to exclusive benefits and discounts</li>
          </ul>
        </div>

        <div className="text-center">
          <a
            href="#apply"
            className="inline-block mt-6 bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-3 rounded-md text-xl font-semibold shadow-lg hover:from-green-500 hover:to-green-700 transition duration-300 ease-in-out"
          >
            Apply for Insurance Now
          </a>
        </div>
      </section>
    </div>
  );
}
