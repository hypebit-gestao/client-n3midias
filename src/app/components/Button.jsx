import React from "react";
const Button = ({
  label,
  background,
  color,
  fontSize,
  rounded,
  width,
  outline,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${background} ${
        outline &&
        "border border-solid border-green-dark hover:bg-green-dark hover:text-white hover:font-bold"
      } ${color} ${fontSize} ${rounded} ${width} cursor-pointer hover:bg-opacity-80 transition-all duration-200 font-bold p-3`}
    >
      {label}
    </button>
  );
};

export default Button;
