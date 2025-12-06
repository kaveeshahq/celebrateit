import React from "react";
import { useAppContext } from "../context/AppContext";
import { Link, useParams } from "react-router-dom";
import { categories } from "../assets/assets";
import ProductCard from "../components/ProductCard";
import Seo from "../components/Seo";
import CategoryBanner from "../components/CategoryBanner ";

const ProductCategory = () => {
  const { products } = useAppContext();
  const { category } = useParams();

  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category
  );

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category
  );

  return (
    <>
      <Seo
        title={`${category.charAt(0).toUpperCase() + category.slice(1)} - Celebrateit`}
        description={filteredProducts[0]?.description?.[0] || "Explore our fresh grocery collection."}
        url={`${window.location.origin}/products/${category}`}
        image={filteredProducts[0]?.image?.[0]}
      />

        <div className="mt-8">
        {/* Category Banner */}
        <CategoryBanner category={category} />
      </div>
      <div className="mt-16">
        {searchCategory && (
          <div className="flex flex-col items-end w-max">
            <p className="text-2xl font-medium">
              {searchCategory.text.toUpperCase()}
            </p>
            <div className="w-16 h-0.5 bg-primary rounded-full"></div>
          </div>
        )}

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-[60vh]">
            <p className="text-2xl font-medium text-primary">No products found...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductCategory;
