import React from "react";
// import { data } from "./data";
import { Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
