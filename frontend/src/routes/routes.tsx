import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage";
import Dashboard from "../pages/VendorPages/Dashboard";
import Wallet from "../pages/VendorPages/Wallet";
import Products from "../pages/VendorPages/MyShop";
import Orders from "../pages/VendorPages/Orders";
import AdminDashboard from "../pages/AdminPages/AdminDashboard";
import PaymentView from "../pages/AdminPages/PaymentView";
import Marketing from "../pages/AdminPages/Marketing";
import AllProducts from "../pages/AdminPages/AllProducts";
import AllOrders from "../pages/AdminPages/AllOrders";
import BuyerView from "../pages/AdminPages/BuyerView";
import VendorView from "../pages/AdminPages/VendorView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },

      // Vendor Routes
      { path: "/vendor/dashboard", element: <Dashboard /> },
      { path: "/vendor/orders", element: <Orders /> },
      { path: "/vendor/myshop", element: <Products /> },
      { path: "/vendor/wallet", element: <Wallet /> },
      { path: "/vendor/add", element: <Wallet /> },
      { path: "/vendor/wallet", element: <Wallet /> },

      // Admin Routes
      { path: "/admin/dashboard", element: <AdminDashboard /> },
      { path: "/admin/payments", element: <PaymentView /> },
      { path: "/admin/marketing", element: <Marketing /> },
      { path: "/admin/allproducts", element: <AllProducts /> },
      { path: "/admin/allorders", element: <AllOrders /> },
      { path: "/admin/buyerview", element: <BuyerView /> },
      { path: "/admin/vendorview", element: <VendorView /> },
    ],
  },
]);

export default router;
