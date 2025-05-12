import React from 'react';

const InvestmentSection = () => {
  return (
    <section className="py-20 px-4 flex items-center justify-center bg-gray-50">
      <div className="max-w-5xl w-full bg-slate-700 flex flex-col md:flex-row items-center justify-center gap-10 p-8 rounded-2xl shadow-md">
        
        {/* Image */}
        <img
          src="invest.jpg" // Replace with your actual path
          alt="Investment Chart"
          className="w-60 h-60 object-contain rounded-xl"
        />

        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-4xl font-bold text-white mb-4">Investments</h2>
          <p className="text-lg text-purple-200 mb-6">
            Broad portfolio with several fixed and variable income asset classes, in addition to
            exclusive investment opportunities with superior returns.
          </p>
          <button className="bg-[#232121] text-white px-6 py-3 rounded-full hover:bg-black transition">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
