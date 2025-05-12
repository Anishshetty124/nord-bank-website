import { Link } from "react-router-dom";

export default function UltravioletPage() {
  return (
    <div className="p-8 bg-gradient-to-r from-purple-50 via-purple-100 to-purple-200 rounded-lg shadow-lg min-h-screen">
      <Link
        to="/"
        className="inline-block mt-4 mb-6 bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-300"
      >
        &larr; Go Back
      </Link>

      <h1 className="text-4xl font-bold text-purple-900 mb-8 text-center">
        Ultraviolet Membership
      </h1>
      <p className="text-lg text-purple-800 mb-10 text-center">
        Experience a premium financial service that blends exclusivity, elite support, and expert financial guidance.
      </p>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-purple-800 mb-4">
          What is Ultraviolet?
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
          <p className="text-gray-700">
            Ultraviolet is a premium financial service tailored for individuals seeking an exclusive, personalized banking experience. It offers enhanced features, elite support, and curated financial insights that go beyond traditional banking.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-purple-800 mb-4">
          Exclusive Benefits
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
          <p className="text-gray-700">
            Members enjoy bespoke rewards, priority support, concierge services, and global travel perks. Additional benefits include higher cashback rates, access to VIP lounges, and early access to investment opportunities.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-purple-800 mb-4">
          Wealth Management
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
          <p className="text-gray-700">
            Our expert advisors work closely with you to develop a personalized financial plan. From investment strategies to tax planning and asset allocation, Ultraviolet ensures your wealth is managed efficiently for long-term success.
          </p>
        </div>
      </section>
    </div>
  );
}
