import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home/Home";
import Cart from "./assets/pages/Cart/Cart";
import Placeorder from "./assets/pages/Placeorder/Placeorder";
import Footer from "./components/Footer/Footer";
import Loginpopup from "./components/Loginpop/Loginpopup";

const App = () => {
  const [showLogin,setShowLogin]=useState(false);
  return (
    <>
    {showLogin?<Loginpopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Placeorder />} />
      </Routes>
    </div>
    <Footer/>
    </>
    
  );
};

export default App;
