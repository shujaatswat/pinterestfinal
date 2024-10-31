import React from "react";

const Explore = ({
  title,
  description,
  btnText,
  className,
  onClick,
  textColor = "text-white",
  discStyle,
}) => {
  return (
    <div className="w-full h-full text-center">
      <h1 className={`text-6xl font-bold ${className}  ${textColor}`}>
        {title}
      </h1>
      <p
        className={`text-2xl   m-auto my-6  ${discStyle}  ${textColor}`}
      >
        {description}
      </p>
      <button
        onClick={onClick}
        className={`text-medium  bg-red-600 rounded-full  px-4 py-3  text-white `}
      >
        {btnText}
      </button>
    </div>
  );
};

export default Explore;
