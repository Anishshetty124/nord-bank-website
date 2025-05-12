import React from 'react';

const ImgSec = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4 bg-[#f5f5f5] text-[#111111]"> {/* Light gray background with near-black text */}
      <h2 className="text-4xl font-bold mb-8 text-center text-[#111111]">
        Your Ultraviolet Experience
      </h2>

      {/* Card Image */}
      <div className="w-[80%] max-w-4xl rounded-2xl overflow-hidden shadow-2xl">
        <img
          src="cardimg.jpg"  // Ensure the correct image path
          alt="Nubank Card"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Button */}
      <button className="mt-8 w-[80%] max-w-md bg-[#232121] text-white font-semibold py-3 px-6 rounded-full text-lg hover:bg-[#3c2929] shadow-xl transition duration-300">
        Get Your Ultraviolet Card
      </button>
    </section>
  );
};

export default ImgSec;
