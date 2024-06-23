import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Navbar,
  Home,
  Copyright,
  Gallery,
  SignupSignin,
  ShoppingCart,
} from "./sections/index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/Signin" element={<SignupSignin />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
        </Routes>
        <Copyright />
      </BrowserRouter>
    </div>
  );
}

export default App;
