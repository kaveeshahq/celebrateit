import React from "react";
import { Flower2, Cake, Gift, Candy, Package, Mail, Store } from "lucide-react";

const CategoryBanner = ({ category }) => {
  // Normalize the category string to match with config keys
  const normalizeCategory = (cat) => {
    return cat.toLowerCase().replace(/\s+/g, '').replace(/&/g, '');
  };

  const categoryConfig = {
    flowers: {
      title: "Flowers",
      subtitle: "Fresh & Beautiful Blooms",
      description: "Express your emotions with our stunning collection of fresh flowers",
      icon: Flower2,
      // gradient: "from-pink-500 to-rose-600",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&q=80"
    },
    "cakeandbakes": {
      title: "Cake & Bakes",
      subtitle: "Delicious Treats & Desserts",
      description: "Celebrate special moments with our freshly baked cakes and pastries",
      icon: Cake,
      gradient: "from-orange-500 to-amber-600",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&q=80"
    },
    gifts: {
      title: "Gifts",
      subtitle: "Thoughtful Gift Ideas",
      description: "Find the perfect gift for your loved ones from our curated collection",
      icon: Gift,
      gradient: "from-purple-500 to-indigo-600",
      image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1200&q=80"
    },
    "chocolatessweets": {
      title: "Chocolates & Sweets",
      subtitle: "Premium Confectionery",
      description: "Indulge in our delectable selection of chocolates and sweets",
      icon: Candy,
      gradient: "from-brown-500 to-yellow-700",
      image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=1200&q=80"
    },
    hampers: {
      title: "Hampers",
      subtitle: "Curated Gift Hampers",
      description: "Premium gift hampers filled with love and care for every occasion",
      icon: Package,
      gradient: "from-green-500 to-emerald-600",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1200&q=80"
    },
    "greetingcards": {
      title: "Greeting Cards",
      subtitle: "Express Your Feelings",
      description: "Beautiful cards for every occasion and celebration",
      icon: Mail,
      gradient: "from-blue-500 to-cyan-600",
      image: "https://images.unsplash.com/photo-1579091563361-ce6fb763e8e3?w=1200&q=80"
    },
    wholesale: {
      title: "Wholesale",
      subtitle: "Bulk Orders & Business Solutions",
      description: "Premium products at wholesale prices for your business needs",
      icon: Store,
      gradient: "from-gray-700 to-gray-900",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
    }
  };

  // Get the normalized category key
  const normalizedKey = normalizeCategory(category);
  
  // Get config or default to flowers
  const config = categoryConfig[normalizedKey] || categoryConfig.flowers;
  const IconComponent = config.icon;
  
  return (
    <div className="relative w-full h-[280px] md:h-[340px] lg:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden mb-8 shadow-xl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={config.image}
          alt={config.title}
          className="w-full h-full object-cover"
        />
        {/* Overlay Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-r ${config.gradient} opacity-70`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 md:p-10 lg:p-12">
        {/* Icon */}
        <div className="mb-4">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2} />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-2 md:space-y-3">
          <p className="text-white/80 text-sm md:text-base font-medium tracking-wide">
            {config.subtitle}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            {config.title}
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-2xl">
            {config.description}
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-6 right-6 md:top-10 md:right-10">
          <div className="w-20 h-20 md:w-32 md:h-32 bg-white/10 backdrop-blur-sm rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-1/4 right-1/4 w-12 h-12 md:w-16 md:h-16 bg-white/5 backdrop-blur-sm rounded-full"></div>
      </div>
    </div>
  );
};

export default CategoryBanner;