import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage";
import Dashboard from "../pages/VendorPages/Dashboard";
import Wallet from "../pages/VendorPages/Wallet";
import Products from "../pages/VendorPages/MyShop";
import Orders from "../pages/VendorPages/Orders";

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
    ],
  },
]);

export default router;
