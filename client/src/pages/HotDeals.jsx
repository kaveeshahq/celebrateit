import React, { useMemo } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";
import Seo from "../components/Seo";
import { Zap, TrendingUp, Flame, Tag, Sparkles } from "lucide-react";

const HotDeals = () => {
  const { products } = useAppContext();

  // Filter products with discount > 10%
  const hotDeals = useMemo(() => {
    return products
      .filter((product) => {
        const discount = ((product.price - product.offerPrice) / product.price) * 100;
        return discount > 10;
      })
      .sort((a, b) => {
        // Sort by highest discount first
        const discountA = ((a.price - a.offerPrice) / a.price) * 100;
        const discountB = ((b.price - b.offerPrice) / b.price) * 100;
        return discountB - discountA;
      });
  }, [products]);

  // Calculate average discount
  const averageDiscount = useMemo(() => {
    if (hotDeals.length === 0) return 0;
    const totalDiscount = hotDeals.reduce((sum, product) => {
      return sum + ((product.price - product.offerPrice) / product.price) * 100;
    }, 0);
    return Math.round(totalDiscount / hotDeals.length);
  }, [hotDeals]);

  // Get highest discount
  const highestDiscount = useMemo(() => {
    if (hotDeals.length === 0) return 0;
    return Math.max(...hotDeals.map(product => 
      Math.round(((product.price - product.offerPrice) / product.price) * 100)
    ));
  }, [hotDeals]);

  return (
    <>
      <Seo
        title="Hot Deals - Celebrateit"
        description="Grab amazing discounts on flowers, cakes, gifts and more! Limited time offers with up to 50% off."
        url={`${window.location.origin}/hot-deals`}
      />

      <div className="min-h-screen py-8">
        {/* Hero Section */}
        <div className="relative mb-12 rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 shadow-2xl">
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative px-6 md:px-12 py-12 md:py-16 text-center">
            {/* Fire Icon Animation */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse"></div>
                <div className="relative bg-white/20 backdrop-blur-sm p-4 rounded-full">
                  <Flame className="w-12 h-12 md:w-16 md:h-16 text-white animate-bounce" strokeWidth={2} />
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
              🔥 Hot Deals 🔥
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-6 drop-shadow-md">
              Grab amazing discounts on your favorite products! Limited time offers you don't want to miss.
            </p>

            {/* Stats Cards */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-md rounded-xl px-4 py-3 border border-white/30 shadow-xl">
                <div className="flex items-center gap-2">
                  <Tag className="w-5 h-5 text-white" />
                  <div className="text-left">
                    <p className="text-white/80 text-xs font-medium">Total Deals</p>
                    <p className="text-2xl font-bold text-white">{hotDeals.length}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-md rounded-xl px-4 py-3 border border-white/30 shadow-xl">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-white" />
                  <div className="text-left">
                    <p className="text-white/80 text-xs font-medium">Avg. Discount</p>
                    <p className="text-2xl font-bold text-white">{averageDiscount}%</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-md rounded-xl px-4 py-3 border border-white/30 shadow-xl">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-white" />
                  <div className="text-left">
                    <p className="text-white/80 text-xs font-medium">Best Deal</p>
                    <p className="text-2xl font-bold text-white">{highestDiscount}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="mb-8 bg-gradient-to-r from-primary/10 via-primary-purple/10 to-primary-pink/10 rounded-xl p-4 border border-primary/20">
          <div className="flex items-center justify-center gap-3 text-center">
            <Zap className="w-5 h-5 text-primary-purple animate-pulse" />
            <p className="text-gray-700 font-medium">
              All deals are <span className="text-primary-purple font-bold">over 10% off</span> and sorted by highest discount!
            </p>
            <Zap className="w-5 h-5 text-primary-purple animate-pulse" />
          </div>
        </div>

        {/* Products Grid */}
        {hotDeals.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {hotDeals.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="bg-gray-100 rounded-full p-8 mb-6">
              <Tag className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No Hot Deals Available</h3>
            <p className="text-gray-600 text-center max-w-md">
              Check back soon for amazing discounts on your favorite products!
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .delay-700 {
          animation-delay: 700ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </>
  );
};

export default HotDeals;