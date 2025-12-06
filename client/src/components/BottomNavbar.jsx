import React from "react";
import { Link } from "react-router-dom";
import { Phone, Flower2, Cake, PartyPopper, Zap, ShoppingBag } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const BottomNavbar = () => {
  const { navigate } = useAppContext();

  const categories = [
    { name: "Flowers", path: "/products/flowers", icon: Flower2, color: "" },
    { name: "Cake & Bakes", path: "/products/cake%20and%20bakes", icon: Cake, color: "" },
    { name: "Events", path: "/events", icon: PartyPopper, color: "" },
    { name: "Hot Deals", path: "/hot-deals", icon: Zap, color: "" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="w-full bg-gradient-to-r from-primary/15 via-primary-purple/15 to-primary-pink/20 shadow-md border-b border-primary/10 sticky top-[64px] md:top-[80px] lg:top-[88px] z-30 backdrop-blur-sm">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between px-6 md:px-16 lg:px-24 py-2">
        {/* CENTER NAV LINKS */}
        <div className="flex-1 flex items-center justify-center gap-2 lg:gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <button
                key={index}
                onClick={() => handleNavigation(category.path)}
                className="group relative px-4 lg:px-6 py-2.5 rounded-xl font-semibold text-gray-700 hover:text-primary transition-all duration-300 hover:bg-white hover:shadow-md"
              >
                <div className="flex items-center gap-2">
                  <IconComponent 
                    size={18} 
                    className={`${category.color} group-hover:scale-110 transition-transform duration-300`} 
                  />
                  <span>{category.name}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex items-center gap-3">
          {/* Hotline Button - Popping Animation */}
          <a
            href="tel:0759915797"
            className="relative group flex items-center gap-2 bg-primary-purple text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-pop overflow-hidden"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-primary-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <Phone size={18} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10 hidden lg:inline">Celebrate Hotline</span>
            <span className="relative z-10 lg:hidden">Hotline</span>
          </a>

          {/* Order Status Button */}
          <Link
            to="/my-orders"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-primary-purple border-2 border-primary-purple font-semibold hover:bg-primary-purple hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <ShoppingBag size={18} className="group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden lg:inline">Order Status</span>
            <span className="lg:hidden">Status</span>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation - Categories + Hotline Button */}
      <div className="md:hidden flex items-center gap-2 px-3 py-3">
        {/* Scrollable Categories */}
        <div className="flex-1 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-1 min-w-max">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleNavigation(category.path)}
                  className="group flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/80 backdrop-blur-sm text-gray-700 font-medium text-sm hover:text-primary hover:bg-white hover:shadow-md transition-all duration-300 whitespace-nowrap border border-gray-100"
                >
                  <IconComponent 
                    size={16} 
                    className={`${category.color} group-hover:scale-110 transition-transform duration-300`} 
                  />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hotline Button - Mobile (Always Visible on Right) */}
        <a
          href="tel:0759915797"
          className="flex-shrink-0 flex items-center gap-1.5 bg-primary-purple text-white px-3 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 animate-pop-mobile"
        >
          <Phone size={16} />
          {/* <span className="text-sm"></span> */}
        </a>
      </div>

      <style jsx>{`
        @keyframes pop {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes pop-mobile {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
          }
        }

        .animate-pop {
          animation: pop 2s ease-in-out infinite;
        }

        .animate-pop-mobile {
          animation: pop-mobile 2s ease-in-out infinite;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </nav>
  );
};

export default BottomNavbar;