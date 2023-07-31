import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [toatlAmount, setTotalAmout] = useState(0);

  useEffect(() => {
    const amount = cart.reduce((acc, curr) => acc + curr.price, 0);
    setTotalAmout(Math.ceil(amount));
  }, [cart]);

  return (
    <div className="mb-10 px-[25px] ">
      {cart.length > 0 ? (
        <div className="flex flex-col mt-14 justify-center items-start md:flex-row">
          <div className="px-10 flex flex-col gap-10">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          {/*Right part */}
          <div className="mr-20 mt-14 flex flex-col justify-center text-left">
            <div className="flex flex-col gap-2 ">
              <div className="text-[25px] font-bold">Your Cart</div>
              <div className="text-[20px] font-semibold">Summary</div>
              <p>
                <span className="text-xl">Total Items: {cart.length}</span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-xl">
                Total Amount:{" "}
                <span className="text-cyan-500 font-semibold ">
                  ${toatlAmount}
                </span>
              </p>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-[20px] px-5 py-2.5 text-center mr-2 mb-2 mt-5">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-full h-screen flex-col items-center justify-center gap-10">
          <h1 className="text-[40px] font-bold">Cart Empty</h1>
          <Link to="/">
            <button
              type="button"
              class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-[20px] px-5 py-2.5 text-center mr-2 mb-2">
              Show Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
