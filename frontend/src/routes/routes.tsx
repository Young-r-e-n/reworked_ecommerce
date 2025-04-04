import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage";
import VDashboard from "../pages/VendorPages/VDashboard";
import VWallet from "../pages/VendorPages/VWallet";
import VProducts from "../pages/VendorPages/VProducts";
import VOrders from "../pages/VendorPages/VOrders";
import VMessages from "../pages/VendorPages/VMessages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },

      // Vendor Routes
      { path: "/vendor/dashboard", element: <VDashboard /> },
      { path: "/vendor/messages", element: <VMessages /> },
      { path: "/vendor/orders", element: <VOrders /> },
      { path: "/vendor/products", element: <VProducts /> },
      { path: "/vendor/wallet", element: <VWallet /> },
    ],
  },
]);

export default router;
