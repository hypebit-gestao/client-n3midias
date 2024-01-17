import React from "react";
const Button = ({
  label,
  background,
  color,
  fontSize,
  rounded,
  width,
  outline,
}) => {
  return (
    <button
      className={`${background} ${
        outline &&
        "border border-solid border-green-primary hover:bg-green-primary hover:text-white"
      } ${color} ${fontSize} ${rounded} ${width} cursor-pointer hover:bg-opacity-80 transition-all duration-200 font-bold p-3`}
    >
      {label}
    </button>
  );
};

export default Button;
