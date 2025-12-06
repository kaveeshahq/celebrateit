import React from "react";
import { useAppContext } from "../context/AppContext";
import { ShoppingCart, Plus, Minus, Tag } from "lucide-react";

const ProductCard = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems, navigate } =
    useAppContext();

  const discount = Math.round(((product.price - product.offerPrice) / product.price) * 100);

  return (
    product && (
      <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 w-full max-w-xs mx-auto">
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 z-10 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
            <Tag size={12} />
            {discount}% OFF
          </div>
        )}

        {/* Product Image */}
        <div
          onClick={() => {
navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
            scrollTo(0, 0);
          }}
          className="relative cursor-pointer overflow-hidden bg-gradient-to-br from-gray-50 to-primary/5"
        >
          <div className="aspect-square w-full flex items-center justify-center p-4">
            <img
              className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
              src={product.image[0]}
              alt={product.name}
              loading="lazy"
            />
          </div>
          
          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Quick View
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          {/* Category */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-primary-purple bg-primary-purple/10 px-2 py-1 rounded-full">
              {product.category}
            </span>
            {!product.inStock && (
              <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">
                Out of Stock
              </span>
            )}
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => {
              navigate(`/products/${product.category.toLowerCase()}/${product.slug}`);
              scrollTo(0, 0);
            }}
            className="text-gray-800 font-semibold text-base leading-tight line-clamp-2 cursor-pointer hover:text-primary transition-colors min-h-[2.5rem]"
          >
            {product.name}
          </h3>

          {/* Price Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-primary">
                {currency}.{product.offerPrice}
              </span>
              {product.price !== product.offerPrice && (
                <span className="text-sm text-gray-400 line-through">
                  {currency}.{product.price}
                </span>
              )}
            </div>
          </div>

          {/* Add to Cart Button */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="pt-2"
          >
            {!cartItems[product._id] ? (
              <button
                onClick={() => addToCart(product._id)}
                disabled={!product.inStock}
                className={`w-full flex items-center cursor-pointer justify-center gap-2 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                  product.inStock
                    ? 'bg-primary-purple text-white hover:shadow-lg hover:scale-105 active:scale-95'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <ShoppingCart size={18} />
                <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
              </button>
            ) : (
              <div className="flex items-center justify-between bg-primary/10 rounded-lg p-1 border-2 border-primary/30">
                <button
                  onClick={() => removeFromCart(product._id)}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-primary hover:bg-primary hover:text-white transition-all duration-200 font-bold shadow-sm"
                >
                  <Minus size={18} />
                </button>
                
                <span className="flex-1 text-center font-bold text-primary text-lg">
                  {cartItems[product._id]}
                </span>
                
                <button
                  onClick={() => addToCart(product._id)}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-white hover:bg-primary-purple transition-all duration-200 font-bold shadow-sm"
                >
                  <Plus size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default ProductCard;