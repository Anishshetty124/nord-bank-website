export function HeroSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Right Side - Image Content (first on mobile) */}
        <div className="w-full order-1 md:order-2">
          <img
            src="mainimg.jpg"
            alt="Ultraviolet Experience"
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Left Side - Text Content (second on mobile) */}
        <div className="order-2 md:order-1">
          <h2 className="text-amber-700 text-lg font-semibold mb-2">
            Nord Ultraviolet
          </h2>
          <h1 className="text-4xl md:text-4xl font-bold text-neutral-900 leading-tight mb-6">
            Solutions designed for you.<br />
            The way it should be.
          </h1>

          {/* CPF Input Form */}
          <div className="bg-white rounded-3xl shadow-md p-6 max-w-md border border-neutral-300">
            <p className="text-neutral-800 mb-3 font-medium">
              Become an Ultraviolet customer
            </p>
            <input
              type="text"
              placeholder="Enter your aadhar/pan"
              className="w-full mb-4 px-5 py-3 rounded-full bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-amber-700 transition"
            />
            <button className="w-full bg-neutral-800 hover:bg-neutral-900 text-white font-semibold py-3 rounded-full transition">
              Continue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
