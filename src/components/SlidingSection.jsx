// SlidingSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./SlidingSection.css"; // 👈 Custom styles

const slides = [
  {
    title: "Ultraviolet Black Card", // Cartão Black Ultraviolet
    image: "sli6.jpg",
  },
  {
    title: "Global Account", // Conta Global
    image: "sli1.jpg",
  },
  {
    title: "Investments", // Investimentos
    image: "sli2.jpg",
  },
  {
    title: "Ultraviolet Support", // Atendimento Ultraviolet
    image: "sli5.jpg",
  },
  {
    title: "NordTag", // NuTag is a brand name (no translation)
    image: "sli3.jpg",
  },
];


const SlidingSection = () => {
  return (
    <div className="carousel-wrapper">
      <Swiper
        spaceBetween={-80}
        slidesPerView={4}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="custom-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`slide-card card-${index % 5}`}>
              <img src={slide.image} alt={slide.title} />
              <div className="caption">{slide.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlidingSection;
