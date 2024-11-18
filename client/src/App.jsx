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
import ShopingHome from "./pages/shoping-view/home";
import ShopingListing from "./pages/shoping-view/Listing";
import ShopingAccount from "./pages/shoping-view/Account";
import ShopingCheckout from "./pages/shoping-view/Checkout";
import CheckAuth from "./components/common/CheckAuth";
import AnAuthPage from "./pages/anauth-page";
import { useSelector } from "react-redux";

function App() {
  // const isAuthenticated = false;
  // const user = {
  //   name: "rajan",
  //   role: "user",
  // };


  const {isAuthenticated , user} = useSelector((state)=>state.auth)
  console.log(isAuthenticated , user , 30 )
  return (
    <Router>
      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="features" element={<Features />} />
        </Route>

        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShopingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShopingHome />} />
          <Route path="listing" element={<ShopingListing />} />
          <Route path="account" element={<ShopingAccount />} />
          <Route path="checkout" element={<ShopingCheckout />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
        <Route path="/anauth-page" element={<AnAuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
