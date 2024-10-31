import React from "react";

const CustomButton = ({
  onClick,
  btnText,
  className,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className}   rounded-full  px-4 py-2  transition duration-200`}
      type={type}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};

export default CustomButton;
