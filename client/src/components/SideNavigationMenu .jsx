import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Grid3x3, Home, ChevronRight, Zap } from "lucide-react";

const SideNavigationMenu = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const menuItems = [
    {
      name: "Home",
      icon: Home,
      path: "/",
      description: "Back to homepage"
    },
    {
      name: "Shop Now",
      icon: ShoppingCart,
      path: "/products",
      description: "Browse all products"
    },
    {
      name: "Categories",
      icon: Grid3x3,
      path: "/products",
      description: "Explore by category",
      hasSubmenu: true,
      submenu: [
        { name: "Flowers", path: "/products/flowers" },
        { name: "Cake & Bakes", path: "/products/cake%20and%20bakes" },
        { name: "Gifts", path: "/products/gifts" },
        { name: "Chocolates & Sweets", path: "/products/chocolates%20%26%20sweets" },
        { name: "Events", path: "/events" },
      ]
    },
    {
      name: "Hot Deals",
      icon: Zap,
      path: "/hot-deals",
      description: "Special offers"
    },
  ];

  const handleLinkClick = (path) => {
    // Handle anchor link for categories section
    if (path === "/#categories") {
      const categoriesSection = document.getElementById("categories");
      if (categoriesSection) {
        categoriesSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    setHoveredIndex(null);
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
      <div className="flex flex-col gap-2">
        {menuItems.map((item, index) => {
          const IconComponent = item.icon;
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Icon Button - Smaller on desktop, visible on mobile */}
              <Link
                to={item.path}
                onClick={() => handleLinkClick(item.path)}
                className="bg-primary-purple text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-l-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 relative overflow-hidden"
              >
                <IconComponent size={18} className="md:w-5 md:h-5 relative z-10" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>

              {/* Expanded Menu on Hover - Only on desktop */}
              {isHovered && (
                <div className="hidden md:block absolute right-12 top-0 animate-slide-in-left">
                  <div className="bg-white rounded-l-xl shadow-2xl border border-gray-100 overflow-hidden min-w-[200px]">
                    {/* Main Item */}
                    <Link
                      to={item.path}
                      onClick={() => handleLinkClick(item.path)}
                      className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition-colors border-b border-gray-100"
                    >
                      <IconComponent size={20} className="text-primary-purple" />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.description}</p>
                      </div>
                      <ChevronRight size={16} className="text-gray-400" />
                    </Link>

                    {/* Submenu if exists */}
                    {item.hasSubmenu && item.submenu && (
                      <div className="py-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            onClick={() => handleLinkClick(subItem.path)}
                            className="flex items-center gap-3 px-5 py-2.5 hover:bg-primary/5 transition-colors text-gray-700 hover:text-primary"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary/30"></div>
                            <span className="text-sm">{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SideNavigationMenu;