import React from "react";

const HomeCard = ({
  containerSize,
  cardText,
  TextSize,

  imagePath,
}) => {
  return (
    <div className={`${containerSize} `}>
      <img src={imagePath} alt="" className="w-full h-full" />
      <h2
        className={`text-white font-semibold absolute top-20  leading-snug  z-10  ${TextSize}`}
      >
        {cardText}
      </h2>
    </div>
  );
};

export default HomeCard;
