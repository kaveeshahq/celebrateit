import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import new_banner from "../assets/new_banner.png";
import delivery_image from "../assets/delivery image.jpg";

const DeliverySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={componentRef}
      className="relative mt-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center animate-fade-in-up">
        <div className="group inline-block relative cursor-pointer mb-6">
          <p className="text-3xl md:text-4xl font-bold text-gray-500">
            Fast <span className="text-primary-pink">Delivery</span>
          </p>
          {/* <span className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-primary-dull w-0 group-hover:w-full transition-all duration-500"></span> */}
        </div>
      </div>

      {/* Full-width background image for desktop */}
   {/* Full-width background image for desktop */}
<div className="hidden md:block relative h-[280px] md:h-[340px] lg:h-[400px] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">  <img
    src={delivery_image}
    alt="Delivery Banner"
    className="w-full h-full object-cover"
  />
  
  <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>

  <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16">
    <div
      className={`max-w-2xl text-white transition-all duration-800 ${
        isVisible ? "animate-fade-in-left" : "opacity-0"
      }`}
    >
      <h1
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-500 ${
          isHovered ? "animate-title-enhance" : ""
        }`}
      >
        Fast & Reliable <br />
        Delivery
      </h1>

      <p className="text-lg md:text-xl mb-8 max-w-lg text-white/90">
        Get your favorite meals delivered right to <br/> your doorstep.
      </p>

      <Link
        to="/add-address"
        className="px-8 py-3 bg-primary-purple hover:bg-primary-purple-dull text-white rounded-lg hover:scale-105 transition-all"
      >
        Add Your Delivery Address
      </Link>
    </div>
  </div>
</div>


      {/* Mobile layout - keep original card style */}
      <div className="md:hidden px-4">
        <div className="flex flex-col items-center gap-8">
          <div
            className={`w-full transition-all duration-800 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src={delivery_image}
                alt="Delivery Banner"
                className="w-full rounded-xl shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
            </div>
          </div>
          <div
            className={`w-full text-center transition-all duration-800 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <h1
              className={`text-2xl font-semibold text-primary mb-4 transition-all duration-500 ${
                isHovered ? "animate-title-enhance" : ""
              }`}
            >
              <span className="inline-block transition-all duration-300 hover:scale-105">
                Fast
              </span>{" "}
              <span className="inline-block transition-all duration-300 hover:scale-105">
                &
              </span>{" "}
              <span className="inline-block transition-all duration-300 hover:scale-105">
                Reliable
              </span>{" "}
              <span className="inline-block transition-all duration-300 hover:scale-105">
                Food
              </span>{" "}
              <span className="inline-block transition-all duration-300 hover:scale-105">
                Delivery
              </span>
            </h1>
            <p
              className={`text-gray-600 mb-6 transition-all duration-500 ${
                isHovered ? "text-gray-700 transform translate-y-1" : ""
              }`}
            >
              <span className="inline-block transition-all duration-300">
                Get your favorite meals delivered right to your doorstep. Enter
                your address to check delivery availability and enjoy fresh, hot
                food in no time.
              </span>
            </p>
            <Link
              to="/add-address"
                  className="px-6 py-2 md:px-8 md:py-3 bg-primary-purple hover:bg-primary-purple-dull text-white rounded-lg hover:scale-105 transition-all text-sm md:text-base"
            >
              {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div> */}
              <span className="relative z-10 transition-all duration-300 group-hover:font-semibold group-hover:tracking-wide">
                Add Your Delivery Address
              </span>
              <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/20 transition-all duration-300"></div>
            </Link>
            <div
              className={`mt-6 flex justify-center gap-2 transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: "0.8s" }}
            >
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-left {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes title-enhance {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-title-enhance span:hover {
          animation: title-enhance 0.4s ease-in-out;
        }

        .group:hover .animate-float {
          animation: float 2s ease-in-out infinite;
        }

        .group:hover {
          animation: button-pulse 1.5s infinite;
        }

        @keyframes button-pulse {
          0%,
          100% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.08);
          }
        }

        .group:hover img {
          transform: scale(1.05) translateY(-5px);
        }

        .md\:block:hover img {
          transform: scale(1.02);
          transition: transform 0.8s ease-out;
        }

        .animate-text-slide {
          animation: text-slide 0.6s ease-out;
        }

        @keyframes text-slide {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
          100% {
            transform: translateX(4px);
          }
        }

        .animate-float-elements {
          animation: float-gentle 3s ease-in-out infinite;
        }

        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-8px) rotate(2deg);
          }
          66% {
            transform: translateY(-4px) rotate(-1deg);
          }
        }
      `}</style>
    </div>
  );
};

export default DeliverySection;
