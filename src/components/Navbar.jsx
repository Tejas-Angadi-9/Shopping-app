import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div>
      <nav className="flex justify-evenly gap-1 items-center h-20 max-w-5xl mx-auto px-5 pt-5">
        <NavLink to="/">
          <div>
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/free-galaxy-appstore-461705.png?f=avif&w=256"
              className="h-16"
              alt="logo"
            />
          </div>
        </NavLink>
        <div className="text-xl font-semibold">Shopping App</div>

        <div className="flex items-center font-medium mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
              justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
