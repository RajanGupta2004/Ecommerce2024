import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthLayout from "./components/auth/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminLayout from "./components/admin-view/AdminLayout";
import DashBoard from "./pages/admin-view/DashBoard";
import Products from "./pages/admin-view/Products";
import Features from "./pages/admin-view/Features";
import Orders from "./pages/admin-view/Orders";
import ShopingLayout from "./components/shoping-view/ShopingLayout";
import PageNotFound from "./pages/not-found";
import Home from "./pages/shoping-view/home";
import Account from "./pages/shoping-view/Account";
import Listing from "./pages/shoping-view/Listing";
import Checkout from "./pages/shoping-view/Checkout";
import ShopingHome from "./pages/shoping-view/home";
import ShopingListing from "./pages/shoping-view/Listing";
import ShopingAccount from "./pages/shoping-view/Account";
import ShopingCheckout from "./pages/shoping-view/Checkout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="features" element={<Features />} />
        </Route>

        <Route path="/shop" element={<ShopingLayout />}>
          <Route path="home" element={<ShopingHome />} />
          <Route path="listing" element={<ShopingListing />} />
          <Route path="account" element={<ShopingAccount />} />
          <Route path="checkout" element={<ShopingCheckout />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
