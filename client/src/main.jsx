import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AppContextProvider } from "./context/AppContext.jsx";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import AddAddress from "./pages/AddAddress";
import MyOrders from "./pages/MyOrders";
import SellerLogin from "./components/seller/SellerLogin";
import SellerLayout from "./pages/seller/SellerLayout";
import AddProduct from "./pages/seller/AddProduct";
import ProductList from "./pages/seller/ProductList";
import Orders from "./pages/seller/Orders";
import ContactUs from "./pages/ContactUs.jsx";
import FAQPage from "./pages/FAQPage.jsx";
import { HelmetProvider } from 'react-helmet-async'
import Events from "./pages/Events.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HelmetProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
      </HelmetProvider>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <AllProducts /> },
      { path: "products/:category", element: <ProductCategory /> },
      { path: "products/:category/:id", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "add-address", element: <AddAddress /> },
      { path: "my-orders", element: <MyOrders /> },
      { path: "contact-us" , element: <ContactUs/> },
      { path: "faq" , element: <FAQPage/> },
      { path: "events" , element: <Events/> },

      {
        path: "seller",
        element: <SellerLayout />,
        children: [
          { index: true, element: <AddProduct /> },
          { path: "product-list", element: <ProductList /> },
          { path: "orders", element: <Orders /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
