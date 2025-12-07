import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import { Menu, X, ShoppingCart, User, LogIn, Search, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const {
    user,
    setUser,
    setShowUserLogin,
    navigate,
    searchQuery,
    setSearchQuery,
    getCartCount,
    axios,
  } = useAppContext();

  const logout = async () => {
    try {
      const { data } = await axios.get("/api/user/logout");
      if (data.success) {
        toast.success(data.message);
        setUser(null);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery]);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 py-3 md:py-4">
        {/* Logo */}
        <NavLink to="/" onClick={() => setOpen(false)} className="relative z-50 flex-shrink-0">
          <img
            className="h-10 md:h-14 transition-transform hover:scale-105 duration-300"
            src={assets.new_logo}
            alt="Celebrateit Logo"
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative font-medium text-gray-700 hover:text-primary transition-colors duration-300 ${
                isActive ? 'text-primary' : ''
              } after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                isActive ? 'after:w-full' : ''
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `relative font-medium text-gray-700 hover:text-primary transition-colors duration-300 ${
                isActive ? 'text-primary' : ''
              } after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                isActive ? 'after:w-full' : ''
              }`
            }
          >
            All Products
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `relative font-medium text-gray-700 hover:text-primary transition-colors duration-300 ${
                isActive ? 'text-primary' : ''
              } after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                isActive ? 'after:w-full' : ''
              }`
            }
          >
            Get in Touch
          </NavLink>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search Bar */}
          <div className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full bg-gray-50 hover:bg-white focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
            <Search size={18} className="text-gray-400" />
            <input
              className="w-48 bg-transparent outline-none placeholder-gray-500 text-sm"
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Cart */}
          <button
            onClick={() => navigate("/cart")}
            className="relative p-2.5 hover:bg-gray-100 rounded-full transition-all duration-300 group"
          >
            <ShoppingCart size={22} className="text-gray-700 group-hover:text-primary transition-colors" />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 text-xs text-white bg-primary w-5 h-5 rounded-full flex items-center justify-center font-semibold shadow-md">
                {getCartCount()}
              </span>
            )}
          </button>

          {/* User Menu */}
{/* User Menu */}
{!user ? (
  <button
    onClick={() => setShowUserLogin(true)}
    className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-primary-purple text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
  >
    <LogIn size={18} />
    <span>Login</span>
  </button>
) : (
  <div className="relative group">
    <button className="flex items-center gap-2 px-4 py-2.5 hover:bg-gray-100 rounded-full transition-all">
      <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-purple rounded-full flex items-center justify-center text-white font-semibold text-sm">
        {user.name?.charAt(0).toUpperCase() || 'U'}
      </div>
      <span className="font-medium text-gray-700">{user.name?.split(' ')[0]}</span>
      <ChevronDown size={16} className="text-gray-500" />
    </button>
    
    {/* Fixed dropdown - removed gap */}
    <div className="hidden group-hover:block absolute top-full right-0 pt-2 z-50">
      <div className="bg-white shadow-xl border border-gray-100 rounded-xl py-2 w-48">
        <button
          onClick={() => navigate("/my-orders")}
          className="w-full text-left px-4 py-2.5 cursor-pointer text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors flex items-center gap-2"
        >
          <ShoppingCart size={16} />
          <span>My Orders</span>
        </button>
        <hr className="my-1 border-gray-100" />
        <button
          onClick={logout}
          className="w-full text-left px-4 py-2.5 text-red-600 hover:bg-red-50  cursor-pointer transition-colors flex items-center gap-2"
        >
          <LogIn size={16} className="rotate-180" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  </div>
)}
        </div>

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Mobile Cart */}
          <button
            onClick={() => navigate("/cart")}
            className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ShoppingCart size={20} className="text-gray-700" />
            {getCartCount() > 0 && (
              <span className="absolute -top-0.5 -right-0.5 text-xs text-white bg-primary w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                {getCartCount()}
              </span>
            )}
          </button>

          {/* Mobile User/Login */}
          {!user ? (
            <button
              onClick={() => setShowUserLogin(true)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <LogIn size={20} className="text-gray-700" />
            </button>
          ) : (
            <button
              onClick={() => navigate("/my-orders")}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <User size={20} className="text-gray-700" />
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-40">
          <div className="px-4 py-4 space-y-1">
            {/* Mobile Search */}
            <div className="flex items-center gap-2 border border-gray-300 px-3 py-2.5 rounded-full bg-gray-50 mb-4">
              <Search size={18} className="text-gray-400" />
              <input
                className="flex-1 bg-transparent outline-none placeholder-gray-500 text-sm"
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Mobile Nav Links */}
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-3 px-4 rounded-lg font-medium transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-3 px-4 rounded-lg font-medium transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              All Products
            </NavLink>
            <NavLink
              to="/contact-us"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-3 px-4 rounded-lg font-medium transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              Get in Touch
            </NavLink>

            {user && (
              <>
                <hr className="my-3 border-gray-200" />
                <NavLink
                  to="/my-orders"
                  onClick={() => setOpen(false)}
                  className="block py-3 px-4 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  My Orders
                </NavLink>
                <button
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="w-full text-left py-3 px-4 rounded-lg font-medium text-red-600 hover:bg-red-50 transition-colors"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;