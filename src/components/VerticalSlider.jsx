import React, { useState, useEffect } from 'react';

const imageCards = [
  {
    id: 1,
    image: 'imgs1.jpg',
    description: 'Exclusive Black Ultraviolet Card with premium benefits.',
  },
  {
    id: 2,
    image: 'imgs2.jpg',
    description: 'Open a Global Account for easy international transactions.',
  },
  {
    id: 3,
    image: 'imgs3.jpg',
    description: 'Invest in high-return opportunities with Ultraviolet’s exclusive investment plans.',
  },
  {
    id: 4,
    image: 'imgs4.jpg',
    description: '24/7 priority support and dedicated service for Ultraviolet members.',
  },
];

const VerticalSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Set the first card as non-blurred at the beginning
  useEffect(() => {
    setHoveredIndex(0);
  }, []);

  return (
    <section className="py-10 px-4 bg-[#787677]">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#272525]">
        Ultraviolet Account
      </h2>
      <h3 className="text-2xl md:text-4xl my-6 text-center text-[#2a2929]"> Unlock exclusive benefits and access premium financial services with the Ultraviolet Account.</h3>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex justify-start md:justify-center space-x-4 md:space-x-6 px-2 md:px-4">
          {imageCards.map((card, index) => {
            const isHovered = hoveredIndex === index;
            const isFirstHovered = index === 0 && hoveredIndex === null; // Detect if it's the first slide and no other is hovered

            const widthClass = isHovered || isFirstHovered
              ? 'w-[240px] md:w-[280px]'
              : 'w-[100px] md:w-[120px]';

            // Apply blackish blur effect to non-hovered slides
            const blurClass = hoveredIndex !== index && !(hoveredIndex === null && index === 0)
              ? 'filter blur-[2px] backdrop-filter backdrop-blur-sm bg-black/60' // Blackish blur with overlay
              : '';

            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative ${widthClass} h-[360px] md:h-[480px] transition-all duration-300 ease-in-out rounded-xl overflow-hidden flex-shrink-0 shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-[#1a1a1a] border border-[#2a2a2a] ${blurClass}`}
              >
                <div className="w-full h-full transition-transform duration-300 transform group-hover:scale-105">
                  <img
                    src={card.image}
                    alt={`Card ${card.id}`}
                    className="w-full h-full object-cover rounded-xl brightness-90"
                  />
                  <div
                    className={`absolute bottom-0 left-0 w-full p-3 md:p-4 text-[#f5e3ca] bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl ${
                      isHovered || isFirstHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <p className="text-sm md:text-lg font-semibold">{card.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VerticalSlider;
