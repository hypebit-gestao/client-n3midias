import React from "react";
import Loader from "./Loader";
const Button = ({
  label,
  background,
  color,
  fontSize,
  rounded,
  width,
  outline,
  onClick,
  loading,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${background} ${
        outline &&
        "border border-solid border-green-dark hover:bg-green-dark hover:text-white hover:font-bold"
      } ${color} ${fontSize} ${rounded} ${width} cursor-pointer hover:bg-opacity-80 transition-all duration-200 font-bold p-3`}
    >
      {loading ? (
        <div className="justify-center items-center">
          <Loader size={8} color={"text-white"} />
        </div>
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
