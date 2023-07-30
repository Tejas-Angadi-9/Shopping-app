import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { remove } from "../Redux/Slices/CartSlics";
import { AiFillDelete } from "react-icons/ai";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div>
      <div>
        <div>
          <img className="h-[180px] mb-5" src={item.image} alt="" />
        </div>
        <div>
          <h1 className="font-semibold text-xl text-left w-[80%] mt-1">
            {item.title}
          </h1>
          <h1 className="w-[80%] font-normal text-[12px] text-left">
            {item.description.split(" ").slice(0, 10).join(" ") + "..."}
          </h1>
          <div className="flex justify-between items-center mt-3 mr-2  border-b-2 w-[82%] border-cyan-500 pb-7">
            <p className="text-cyan-500 font-semibold">${item.price}</p>
            <div onClick={removeFromCart} className="cursor-pointer">
              <AiFillDelete/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
