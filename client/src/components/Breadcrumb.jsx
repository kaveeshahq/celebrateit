import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const Breadcrumb = () => {
  const location = useLocation();
  const { products } = useAppContext();
  const [breadcrumbData, setBreadcrumbData] = useState([]);
  
  // Split the pathname and filter out empty strings
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Function to format breadcrumb text (convert hyphens to spaces, capitalize)
  const formatBreadcrumb = (text) => {
    return text
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Function to check if a string is a MongoDB ObjectId (24 hex characters)
  const isProductId = (str) => {
    return /^[a-f\d]{24}$/i.test(str);
  };

  // Build breadcrumb data with product names
  useEffect(() => {
    const buildBreadcrumbs = () => {
      const breadcrumbs = pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        // Check if this segment is a product ID
        if (isProductId(name) && products.length > 0) {
          const product = products.find(p => p._id === name);
          return {
            name: product ? product.name : formatBreadcrumb(name),
            routeTo,
            isLast,
            isProduct: true
          };
        }

        return {
          name: formatBreadcrumb(name),
          routeTo,
          isLast,
          isProduct: false
        };
      });

      setBreadcrumbData(breadcrumbs);
    };

    buildBreadcrumbs();
  }, [location.pathname, products]);

  // Don't show breadcrumb on home page
  if (location.pathname === "/") return null;

  return (
    <nav className="px-4 md:px-16 lg:px-24 py-4 bg-gradient-to-r from-gray-50 to-primary/5">
      <ol className="flex items-center flex-wrap gap-2 text-sm md:ml-2 lg:ml-8">
        {/* Home Link */}
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors duration-200 group"
          >
            <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-medium">Home</span>
          </Link>
        </li>

        {/* Dynamic Breadcrumb Items */}
        {breadcrumbData.map((item, index) => (
          <li key={item.routeTo} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {item.isLast ? (
              <span className="text-primary font-semibold truncate max-w-xs">
                {item.name}
              </span>
            ) : (
              <Link
                to={item.routeTo}
                className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium truncate max-w-xs"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};  

export default Breadcrumb;