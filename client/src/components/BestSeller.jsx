import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";

const BestSeller = () => {
  const { products } = useAppContext();
  return (
    <div className="mt-16">
      <div className="text-center animate-fade-in-up">
        <div className="group inline-block relative cursor-pointer mb-6">
          <p className="text-3xl md:text-4xl font-bold text-gray-500">
            Best Selling <span className="text-primary-pink">Products</span>
          </p>
          {/* <span className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-primary-dull w-0 group-hover:w-full transition-all duration-500"></span> */}
        </div>
     
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {products
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default BestSeller;
