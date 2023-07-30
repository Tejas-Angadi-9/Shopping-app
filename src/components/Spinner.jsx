import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="flex flex-col gap-5 w-full h-screen items-center justify-center">
      <div className="custom-loader "></div>
      <div className="text-[30px] font-bold">Loading</div>
    </div>
  );
};

export default Spinner;
