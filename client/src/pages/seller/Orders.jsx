import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import toast from "react-hot-toast";
import { Package, MapPin, Phone, Calendar, CreditCard, ChevronDown, Trash2 } from "lucide-react";

const Orders = () => {
  const { currency, axios } = useAppContext();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingOrderId, setUpdatingOrderId] = useState(null);
  const [deletingOrderId, setDeletingOrderId] = useState(null);

  const orderStatuses = [
    "Order Placed",
    "Processing",
    "Shipped",
    "Out for Delivery",
    "Delivered",
    "Cancelled"
  ];

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/order/seller");
      if (data.success) {
        setOrders(data.orders);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      setUpdatingOrderId(orderId);
      const { data } = await axios.put("/api/order/status", {
        orderId,
        status: newStatus
      });
      
      if (data.success) {
        toast.success("Order status updated successfully");
        // Update local state
        setOrders(orders.map(order => 
          order._id === orderId ? { ...order, status: newStatus } : order
        ));
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setUpdatingOrderId(null);
    }
  };

  const deleteOrder = async (orderId) => {
    if (!window.confirm("Are you sure you want to delete this order? This action cannot be undone.")) {
      return;
    }

    try {
      setDeletingOrderId(orderId);
      const { data } = await axios.delete("/api/order/delete", {
        data: { orderId }
      });
      
      if (data.success) {
        toast.success("Order deleted successfully");
        // Remove order from local state
        setOrders(orders.filter(order => order._id !== orderId));
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setDeletingOrderId(null);
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

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="no-scrollbar overflow-y-scroll flex-1 h-[95vh]">
        <div className="md:p-10 p-4">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Orders Management</h2>
          <p className="text-gray-500">Loading orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="no-scrollbar overflow-y-scroll flex-1 h-[95vh] bg-gray-50">
      <div className="md:p-10 p-4">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Orders Management</h2>
          <p className="text-gray-600">Manage and track all customer orders</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <p className="text-xs text-gray-500 font-medium mb-1">Total Orders</p>
            <p className="text-2xl font-bold text-gray-800">{orders.length}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow-sm border border-green-100">
            <p className="text-xs text-green-600 font-medium mb-1">Delivered</p>
            <p className="text-2xl font-bold text-green-700">
              {orders.filter(o => o.status === "Delivered").length}
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-100">
            <p className="text-xs text-blue-600 font-medium mb-1">Processing</p>
            <p className="text-2xl font-bold text-blue-700">
              {orders.filter(o => ["Processing", "Shipped", "Out for Delivery"].includes(o.status)).length}
            </p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg shadow-sm border border-yellow-100">
            <p className="text-xs text-yellow-600 font-medium mb-1">Pending</p>
            <p className="text-2xl font-bold text-yellow-700">
              {orders.filter(o => o.status === "Order Placed").length}
            </p>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {orders.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No orders found</p>
            </div>
          ) : (
            orders.map((order, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200"
              >
                {/* Order Header */}
                <div className="bg-gradient-to-r from-primary/5 to-primary-purple/5 p-4 border-b border-gray-200">
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
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-700">{order.paymentType}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${order.isPaid ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {order.isPaid ? "Paid" : "Pending"}
                      </span>
                    </div>

                    <div className="bg-white px-4 py-2 rounded-lg border border-primary/20">
                      <p className="text-xs text-gray-500 font-medium">Total</p>
                      <p className="text-lg font-bold text-primary">
                        {currency}.{order.amount}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Order Content */}
                <div className="p-4 md:p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Products Section */}
                    <div className="md:col-span-1">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <Package className="w-4 h-4" />
                        Products
                      </h4>
                      <div className="space-y-2">
                        {order.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-2 text-sm">
                            {item.product ? (
                              <>
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <p className="text-gray-700">
                                  {item.product.name}{" "}
                                  <span className="text-primary font-medium">x{item.quantity}</span>
                                </p>
                              </>
                            ) : (
                              <p className="text-red-500 text-xs">Product Deleted</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Address Section */}
                    <div className="md:col-span-1">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Delivery Address
                      </h4>
                      {order.address ? (
                        <div className="text-sm text-gray-600 space-y-1">
                          <p className="font-medium text-gray-800">
                            {order.address.firstName} {order.address.lastName}
                          </p>
                          <p>{order.address.street}</p>
                          <p>{order.address.city}, {order.address.state}</p>
                          <p>{order.address.zipcode}, {order.address.country}</p>
                          <p className="flex items-center gap-1 mt-2">
                            <Phone className="w-3 h-3" />
                            {order.address.phone}
                          </p>
                        </div>
                      ) : (
                        <p className="text-red-500 text-sm">Address not available</p>
                      )}
                    </div>

                    {/* Status Section */}
                    <div className="md:col-span-1">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">
                        Order Status
                      </h4>
                      <div className="space-y-3">
                        <div className={`px-3 py-2 rounded-lg border font-medium text-sm ${getStatusColor(order.status)}`}>
                          {order.status}
                        </div>

                        <div className="relative">
                          <select
                            value={order.status}
                            onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                            disabled={updatingOrderId === order._id || deletingOrderId === order._id}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed appearance-none cursor-pointer"
                          >
                            {orderStatuses.map((status, idx) => (
                              <option key={idx} value={status}>
                                {status}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>

                        {updatingOrderId === order._id && (
                          <p className="text-xs text-gray-500 italic">Updating...</p>
                        )}

                        {/* Delete Button */}
                        <button
                          onClick={() => deleteOrder(order._id)}
                          disabled={updatingOrderId === order._id || deletingOrderId === order._id}
                          className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-red-200"
                        >
                          <Trash2 className="w-4 h-4" />
                          {deletingOrderId === order._id ? "Deleting..." : "Delete Order"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;