import { Link } from "react-router-dom";

export default function NordBankAccount() {
  return (
    <div className="p-8 bg-gradient-to-r from-teal-50 via-teal-100 to-teal-200 rounded-lg shadow-lg">
<Link to="/" className="inline-block mt-4 mb-6 bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-300">
  &larr; Go Back
</Link>
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Open Your Nord Bank Digital Account Today
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        With Nord Bank, enjoy a seamless and hassle-free banking experience. Open a digital account with no maintenance fees, easy access through our mobile app, and instant notifications to keep you in control of your finances.
      </p>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-teal-700">No Maintenance Fees</h3>
            <p className="text-gray-600 mt-2">Say goodbye to monthly maintenance fees with Nord Bank accounts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-teal-700">Instant Transfers</h3>
            <p className="text-gray-600 mt-2">Transfer funds instantly and securely with Nord Bank's fast and reliable system.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-teal-700">Mobile App Access</h3>
            <p className="text-gray-600 mt-2">Manage your account, track spending, and make transactions easily through our user-friendly mobile app.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-teal-700">24/7 Customer Support</h3>
            <p className="text-gray-600 mt-2">Our team is available round the clock to assist with any questions or issues.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">How to Open an Account</h2>
        <p className="text-lg text-gray-700 mb-6">
          Opening a Nord Bank account is simple, fast, and secure. Just download our app, follow a quick registration process, and you’re all set to start banking with us.
        </p>

        <div className="text-center">
          <a
            href="#open-account"
            className="inline-block mt-6 bg-gradient-to-r from-teal-500 to-teal-700 text-white px-8 py-3 rounded-md text-xl font-semibold shadow-lg hover:from-teal-600 hover:to-teal-800 transition duration-300 ease-in-out"
          >
            Open Account Now
          </a>
        </div>
      </section>
    </div>
  );
}
