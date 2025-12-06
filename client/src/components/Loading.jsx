import React, { useEffect } from "react";
import { assets } from "../assets/assets";

const Loading = ({ onComplete, nextUrl = "my-orders" }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete(nextUrl);
    }, 6000);
    return () => clearTimeout(timer);
  }, [nextUrl, onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      {/* Logo with pulse animation */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <img 
          src={assets.new_logo}
          alt="Celebrateit Logo" 
          className="relative h-20 md:h-24 animate-float drop-shadow-lg"
        />
      </div>

      {/* Loading spinner */}
      <div className="relative w-16 h-16 mb-6">
        {/* Outer ring */}
        <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
        
        {/* Spinning gradient ring */}
        <div className="absolute inset-0 border-4 border-transparent border-t-primary border-r-primary-pink rounded-full animate-spin"></div>
        
        {/* Inner dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary-purple rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Loading text */}
      <div className="text-center">
        <p className="text-gray-700 font-semibold mb-2 animate-pulse">
          Loading your celebration...
        </p>
        <div className="flex items-center justify-center gap-1">
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
          <span className="w-2 h-2 bg-primary-pink rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
          <span className="w-2 h-2 bg-primary-purple rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loading;