import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    desktop: assets.new_banner,
    mobile: assets.new_banner,
    text: ["Freshness", "You Can Trust", "Savings You’ll Love!"],
  },
  {
    id: 2,
    desktop: assets.banner_2_new,
    mobile: assets.banner_2_new,
    text: ["Blossoms", "Delivered Daily", "Right to Your Door"],
  },
  {
    id: 3,
    desktop: assets.banner_3,
    mobile: assets.banner_3,
    text: ["Celebrate", "Every Moment", "With Fresh Flowers"],
  },
];

const MainBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl h-[260px] md:h-[360px] lg:h-[420px] mx-auto">
      
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full relative h-full">

            {/* Desktop */}
            <img
              src={slide.desktop}
              className="hidden md:block w-full h-full object-cover"
              alt="banner"
            />

            {/* Mobile */}
            <img
              src={slide.mobile}
              className="md:hidden w-full h-full object-cover"
              alt="banner mobile"
            />

            {/* TEXT */}
            <div className="absolute inset-0 flex flex-col justify-start items-start pt-8 md:pt-14 px-6 md:px-14 lg:px-20">

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight space-y-1">
                {slide.text.map((line, i) => (
                  <div
                    key={i}
                    className="opacity-0 animate-slideIn"
                    style={{ animationDelay: `${0.15 + i * 0.15}s` }}
                  >
                    {line}
                  </div>
                ))}
              </h1>

              {/* BUTTONS */}
              <div className="mt-4 flex gap-3 md:gap-4">
                <Link
                  to="/products"
                  className="px-6 py-2 md:px-8 md:py-3 bg-primary-purple hover:bg-primary-purple-dull text-white rounded-lg hover:scale-105 transition-all text-sm md:text-base"
                >
                  Shop Now
                </Link>

                <Link
                  to="/products"
                  className="px-6 py-2 md:px-8 md:py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-all text-sm md:text-base"
                >
                  Explore Deals
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Animation */}
      <style>{`
        @keyframes slideIn {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.7s forwards ease-out;
        }
      `}</style>
    </div>
  );
};

export default MainBanner;
