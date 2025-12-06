import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { assets, dummyAddress } from "../assets/assets";
import toast from "react-hot-toast";
import Seo from "../components/Seo";
import { ShoppingCart, Trash2, MapPin, CreditCard, ArrowLeft, Package, Truck } from "lucide-react";

const Cart = () => {
  const [showAddress, setShowAddress] = useState(false);

  const {
    products,
    currency,
    cartItems,
    removeFromCart,
    getCartCount,
    updateCartItem,
    navigate,
    getCartAmount,
    axios,
    user,
    setCartItems,
  } = useAppContext();

  const [cartArray, setCartArray] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentOption, setPaymentOption] = useState("COD");

  const getCart = () => {
    let tempArray = [];
    for (const key in cartItems) {
      const product = products.find((item) => item._id === key);
      product.quantity = cartItems[key];
      tempArray.push(product);
    }
    setCartArray(tempArray);
  };

  const getUserAddress = async () => {
    try {
      const { data } = await axios.get("/api/address/get");
      if (data.success) {
        setAddresses(data.addresses);
        if (data.addresses.length > 0) {
          setSelectedAddress(data.addresses[0]);
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const placeOrder = async () => {
    try {
      if (!selectedAddress) {
        return toast.error("Please Select an Address");
      }
      if (paymentOption === "COD") {
        const { data } = await axios.post("/api/order/cod", {
          userId: user._id,
          items: cartArray.map((item) => ({
            product: item._id,
            quantity: item.quantity,
          })),
          address: selectedAddress._id,
        });
        if (data.success) {
          toast.success(data.message);
          setCartItems({});
          navigate("/my-orders");
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post("/api/order/stripe", {
          userId: user._id,
          items: cartArray.map((item) => ({
            product: item._id,
            quantity: item.quantity,
          })),
          address: selectedAddress._id,
        });
        if (data.success) {
          window.location.replace(data.url);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (products.length > 0 && cartItems) {
      getCart();
    }
  }, [products, cartItems]);

  useEffect(() => {
    if (user) {
      getUserAddress();
    }
  }, [user]);

  return products.length > 0 && cartItems ? (
    <>
      <Seo
        title="Celebrateit - Customer Cart"
        description="Here is the all products in Celebrateit."
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary/5 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <ShoppingCart className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-500">Shopping <span className="text-primary">Cart</span> </h1>
              <p className="text-sm text-gray-600 mt-1">
                {getCartCount()} {getCartCount() === 1 ? 'Item' : 'Items'} in your cart
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items Section */}
            <div className="flex-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Table Header */}
                <div className="hidden md:grid md:grid-cols-[2fr_1fr_1fr_auto] gap-4 bg-gradient-to-r from-primary/5 to-primary-purple/5 p-4 text-sm font-semibold text-gray-700 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <Package size={16} className="text-primary" />
                    <span>Product Details</span>
                  </div>
                  <p className="text-center">Subtotal</p>
                  <p className="text-center">Quantity</p>
                  <p className="text-center">Action</p>
                </div>

                {/* Cart Items */}
                <div className="divide-y divide-gray-100">
                  {cartArray.map((product, index) => (
                    <div
                      key={index}
                      className="p-4 md:p-6 hover:bg-gray-50/50 transition-colors duration-200"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_auto] gap-4 items-center">
                        {/* Product Info */}
                        <div className="flex items-center gap-4">
                          <div
                            onClick={() => {
                              navigate(
                                `/products/${product.category.toLowerCase()}/${product._id}`
                              );
                              scrollTo(0, 0);
                            }}
                            className="cursor-pointer w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary-purple/10 rounded-xl overflow-hidden flex-shrink-0 hover:scale-105 transition-transform duration-200"
                          >
                            <img
                              className="w-full h-full object-cover"
                              src={product.image[0]}
                              alt={product.name}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-800 text-base md:text-lg mb-1 truncate">
                              {product.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              Weight: <span className="font-medium">{product.weight || "N/A"}</span>
                            </p>
                            <p className="text-sm text-primary font-semibold mt-1 md:hidden">
                              {currency}.{product.offerPrice * product.quantity}
                            </p>
                          </div>
                        </div>

                        {/* Subtotal - Desktop */}
                        <p className="hidden md:block text-center text-lg font-semibold text-primary">
                          {currency}.{product.offerPrice * product.quantity}
                        </p>

                        {/* Quantity Selector */}
                        <div className="flex items-center justify-center md:justify-center">
                          <div className="flex items-center gap-2">
                            <label className="text-sm text-gray-600 md:hidden">Qty:</label>
                            <select
                              onChange={(e) =>
                                updateCartItem(product._id, Number(e.target.value))
                              }
                              value={cartItems[product._id]}
                              className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary cursor-pointer"
                            >
                              {Array(
                                cartItems[product._id] > 9 ? cartItems[product._id] : 9
                              )
                                .fill("")
                                .map((_, index) => (
                                  <option key={index} value={index + 1}>
                                    {index + 1}
                                  </option>
                                ))}
                            </select>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(product._id)}
                          className="flex items-center cursor-pointer justify-center w-10 h-10 rounded-full bg-red-50 text-red-600 hover:bg-red-100 hover:scale-110 transition-all duration-200 mx-auto"
                          title="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Continue Shopping Button */}
              <button
                onClick={() => {
                  navigate("/products");
                  scrollTo(0, 0);
                }}
                className="flex items-center cursor-pointer gap-2 mt-6 text-primary font-semibold hover:text-primary-purple transition-colors duration-200 group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-200 cursor-pointer" />
                Continue Shopping
              </button>
            </div>

            {/* Order Summary Section */}
            <div className="lg:w-[420px]">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

                {/* Delivery Address */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={18} className="text-primary" />
                    <p className="text-sm font-semibold text-gray-700 uppercase">Delivery Address</p>
                  </div>
                  <div className="relative">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <p className="text-sm text-gray-700 leading-relaxed mb-2">
                        {selectedAddress
                          ? `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country}`
                          : "No address found"}
                      </p>
                      <button
                        onClick={() => setShowAddress(!showAddress)}
                        className="text-primary text-sm font-semibold cursor-pointer hover:text-primary-purple transition-colors"
                      >
                        Change Address
                      </button>
                    </div>
                    
                    {showAddress && (
                      <div className="absolute z-10 top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
                        <div className="divide-y divide-gray-100">
                          {addresses.map((address, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                setSelectedAddress(address);
                                setShowAddress(false);
                              }}
                              className="w-full text-left p-4 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                              {address.street}, {address.city}, {address.state}, {address.country}
                            </button>
                          ))}
                          <button
                            onClick={() => navigate("/add-address")}
                            className="w-full text-center p-4 text-sm text-primary font-semibold hover:bg-primary/5 transition-colors"
                          >
                            + Add New Address
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CreditCard size={18} className="text-primary" />
                    <p className="text-sm font-semibold text-gray-700 uppercase">Payment Method</p>
                  </div>
                  <select
                    onChange={(e) => setPaymentOption(e.target.value)}
                    className="w-full border border-gray-200 bg-gray-50 rounded-lg px-4 py-3 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary cursor-pointer"
                  >
                    <option value="COD">Cash On Delivery</option>
                    <option value="Online">Online Payment</option>
                  </select>
                </div>

                <hr className="border-gray-200 my-6" />

                {/* Price Breakdown */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold">
                      {currency}.{getCartAmount()}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span className="flex items-center gap-1">
                      <Truck size={16} />
                      Shipping Fee
                    </span>
                    <span className="font-semibold text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (2%)</span>
                    <span className="font-semibold">
                      {currency}.{((getCartAmount() * 2) / 100).toFixed(2)}
                    </span>
                  </div>

                  <hr className="border-gray-200 my-4" />

                  <div className="flex justify-between text-lg font-bold text-gray-800">
                    <span>Total Amount</span>
                    <span className="text-primary">
                      {currency}.{(getCartAmount() + (getCartAmount() * 2) / 100).toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Place Order Button */}
                <button
                  onClick={placeOrder}
                  className="w-full mt-6 py-4 bg-primary-purple cursor-pointer text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  {paymentOption === "COD" ? "Place Order" : "Proceed to Checkout"}
                </button>

                {/* Security Badge */}
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Secure Checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default Cart;