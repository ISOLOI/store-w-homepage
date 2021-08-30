import react from "react";
import "./styles.css";
import { useState } from "react";
import WishList from "./components/WishList/wishList";
import Home from "./components/Home/home";
import Navigation from "./components/navigation/navigation";
import Cart from "./components/Cart/cart";
import BuySmartLandingPage from "./components/BuySmart/buysmart";
import LoginFalse from "./components/Login/login-false.js";
import PrivateRoute from "./components/PrivateRoute/private-route.js";
import { useAuthContext } from "./contexts/auth-context.js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export default function App() {
  const { isUserLoggedIn } = useAuthContext();

  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<BuySmartLandingPage />} />
        <Route path="/product" element={<Home />} />
        <Route path="/wishList" element={<WishList />} />
        {/* {isUserLoggedIn && <Route path="/cart" element={<Cart />} />}
        {!isUserLoggedIn && <Route path="/cart" element={<LoginFalse />} />} */}
        <PrivateRoute path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginFalse/>}/>

      </Routes>
    </div>
  );
}
