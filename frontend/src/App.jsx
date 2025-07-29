import { Route, Routes } from "react-router-dom";

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SignUpSeller from "./pages/SignUpSeller";
import LoginSeller from "./pages/LoginSeller";
import NavBarBuyer from "./components/NavBarBuyer";
import NavBarSeller from "./components/NavBarSeller";

import "./App.css";
import SellerInfo from "./pages/SellerInfo";
import Category from "./components/Category";
import Hero from "./components/Hero";
import Recommendations from "./components/Recommendations";
import Assurances from "./components/Assurances";
// import UserFooter from './components/userFotter'
import Product from "./pages/Product";
import SearchPage from "./pages/SearchPage";
import Home from "./pages/Home";
import RouteProtector from "./routeProtector/RouteProtector";
import Cart from "./pages/Cart";
import BuyNow from "./pages/BuyNow";
import { createContext } from "react";
import Orders from "./pages/Orders";

//
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/orders"
          element={
            <RouteProtector>
              <Orders />
            </RouteProtector>
          }
        />
        <Route
          path="/BuyNow"
          element={
            <RouteProtector>
              <BuyNow />
            </RouteProtector>
          }
        />
        <Route
          path="/cart"
          element={
            <RouteProtector>
              <Cart />
            </RouteProtector>
          }
        />

        <Route path="/getProduct/:productId" element={<Product />} />
        <Route path="/searchPage/:filter" element={<SearchPage />} />
        <Route path="/searchPage" element={<SearchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/loginSeller" element={<LoginSeller />} />
        <Route path="/signUpSeller" element={<SignUpSeller />} />
        <Route path="/sellerInfo" element={<SellerInfo />} />
      </Routes>
    </>
  );
}

export default App;
