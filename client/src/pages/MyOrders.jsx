import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { dummyOrders } from "../assets/assets";
import Seo from "../components/Seo";
import { Package, CreditCard, Calendar, MapPin, ShoppingBag } from "lucide-react";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { currency, axios, user } = useAppContext();

  const fetchMyOrders = async () => {
    try {
      const { data } = await axios.get("/api/order/user");
      console.log("Order API Response:", data);
      if (data.success) {
        setMyOrders(data.orders);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchMyOrders();
    }
  }, [user]);

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'delivered':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'processing':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'cancelled':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <>
      <Seo
        title="Celebrateit - My Orders"
        description="Here is the ordered products by customer."
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary/5 py-8 px-4 md:px-16 lg:px-24">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex items-center gap-3 mb-2">
            <ShoppingBag className="w-8 h-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">My Orders</h1>
          </div>
          <p className="text-gray-600 ml-11">Track and manage your order history</p>
        </div>

        {/* Orders List */}
        <div className="max-w-6xl mx-auto space-y-6">
          {myOrders.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No orders yet</h3>
              <p className="text-gray-500">Start shopping to see your orders here!</p>
            </div>
          ) : (
            myOrders.map((order, index) => (
              <div
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
                key={index}
              >
                {/* Order Header */}
                <div className="bg-gradient-to-r from-primary/5 to-primary-purple/5 p-4 md:p-6 border-b border-gray-100">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <Package className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Order ID</p>
                        <p className="text-sm font-semibold text-gray-800">{order._id}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-primary-purple flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Payment</p>
                        <p className="text-sm font-semibold text-gray-800">{order.paymentType}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary-pink flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Order Date</p>
                        <p className="text-sm font-semibold text-gray-800">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="bg-white px-4 py-2 rounded-lg border border-primary/20">
                      <p className="text-xs text-gray-500 font-medium mb-0.5">Total Amount</p>
                      <p className="text-lg font-bold text-primary">
                        {currency}.{order.amount}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="divide-y divide-gray-100">
                  {order.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="p-4 md:p-6 hover:bg-gray-50/50 transition-colors duration-200"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Product Image & Info */}
                        <div className="flex items-start gap-4 flex-1">
                          <div className="bg-gradient-to-br from-primary/10 to-primary-purple/10 p-3 rounded-xl flex-shrink-0">
                            <img
                              src={item.product.image[0]}
                              alt={item.product.name}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
                              {item.product.name}
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">{item.product.category}</p>
                            
                            <div className="flex flex-wrap items-center gap-3 text-sm">
                              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 font-medium">
                                Qty: {item.quantity || 1}
                              </span>
                              <span className={`px-3 py-1 rounded-full font-medium border ${getStatusColor(order.status)}`}>
                                {order.status}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-2 md:min-w-[120px]">
                          <p className="text-xs text-gray-500 font-medium md:mb-1">Item Total</p>
                          <p className="text-xl font-bold text-primary">
                            {currency}.{item.product.offerPrice * item.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default MyOrders;