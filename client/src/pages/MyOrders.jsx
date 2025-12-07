import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import Seo from "../components/Seo";
import { 
  Package, 
  CreditCard, 
  Calendar, 
  MapPin, 
  ShoppingBag, 
  CheckCircle, 
  Truck, 
  Clock,
  XCircle
} from "lucide-react";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { currency, axios, user } = useAppContext();
  const [loading, setLoading] = useState(true);

  const fetchMyOrders = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/order/user");
      if (data.success) {
        setMyOrders(data.orders);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchMyOrders();
    }
  }, [user]);

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'cancelled':
        return <XCircle className="w-5 h-5 text-red-600" />;
      case 'shipped':
      case 'out for delivery':
        return <Truck className="w-5 h-5 text-blue-600" />;
      case 'processing':
        return <Clock className="w-5 h-5 text-yellow-600" />;
      default:
        return <Package className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'delivered':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'cancelled':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'shipped':
      case 'out for delivery':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'processing':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusProgress = (status) => {
    const statuses = {
      'order placed': 20,
      'processing': 40,
      'shipped': 60,
      'out for delivery': 80,
      'delivered': 100,
      'cancelled': 0
    };
    return statuses[status?.toLowerCase()] || 20;
  };

  if (loading) {
    return (
      <>
        <Seo
          title="Celebrateit - My Orders"
          description="Track and manage your order history"
        />
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary/5 py-8">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-gray-500 text-center">Loading your orders...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Seo
        title="Celebrateit - My Orders"
        description="Track and manage your order history"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary/5 py-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <ShoppingBag className="w-8 h-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">My Orders</h1>
            </div>
            <p className="text-gray-600 ml-11">Track and manage your order history</p>
          </div>

          {/* Orders List */}
          <div className="space-y-6">
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
                      <div className="flex items-center gap-3">
                        <div className="bg-white p-2 rounded-lg">
                          <Package className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium">Order ID</p>
                          <p className="text-sm font-semibold text-gray-800">{order._id}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-primary-purple flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-500 font-medium">Payment</p>
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-semibold text-gray-800">{order.paymentType}</p>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${order.isPaid ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                              {order.isPaid ? 'Paid' : 'Pending'}
                            </span>
                          </div>
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

                    {/* Status Badge & Progress */}
                    <div className="mt-4">
                      <div className="flex items-center gap-3 mb-2">
                        {getStatusIcon(order.status)}
                        <span className={`px-3 py-1 rounded-full font-medium text-sm border ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      {order.status?.toLowerCase() !== 'cancelled' && (
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-primary to-primary-purple h-full transition-all duration-500 rounded-full"
                            style={{ width: `${getStatusProgress(order.status)}%` }}
                          ></div>
                        </div>
                      )}
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
                              {item.product ? (
                                <img
                                  src={item.product.image[0]}
                                  alt={item.product.name}
                                  className="w-20 h-20 object-cover rounded-lg"
                                />
                              ) : (
                                <Package className="w-20 h-20 text-gray-400" />
                              )}
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              {item.product ? (
                                <>
                                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                    {item.product.name}
                                  </h3>
                                  <p className="text-sm text-gray-500 mb-2">{item.product.category}</p>
                                  
                                  <div className="flex flex-wrap items-center gap-3 text-sm">
                                    <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 font-medium">
                                      Qty: {item.quantity || 1}
                                    </span>
                                    <span className="text-gray-600">
                                      {currency}.{item.product.offerPrice} each
                                    </span>
                                  </div>
                                </>
                              ) : (
                                <p className="text-red-500 font-medium">Product no longer available</p>
                              )}
                            </div>
                          </div>

                          {/* Price */}
                          <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-2 md:min-w-[120px]">
                            <p className="text-xs text-gray-500 font-medium md:mb-1">Item Total</p>
                            <p className="text-xl font-bold text-primary">
                              {item.product ? `${currency}.${item.product.offerPrice * item.quantity}` : 'N/A'}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Delivery Address */}
                  {order.address && (
                    <div className="bg-gray-50 p-4 md:p-6 border-t border-gray-100">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Delivery Address</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {order.address.firstName} {order.address.lastName}<br />
                            {order.address.street}<br />
                            {order.address.city}, {order.address.state} {order.address.zipcode}<br />
                            {order.address.country}<br />
                            <span className="font-medium mt-1 inline-block">Phone: {order.address.phone}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrders;