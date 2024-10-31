import React, { memo, useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import CarouselImages from "./CarouselImages";
import { HEADINGS } from "../assets/Headings";
import { DownAngleIcon } from "../assets/SvgIcons";

const Carousel = memo(() => {
  const [currentHeadingsIndex, setCurrentHeadingsIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentHeadingsIndex((currentIndex) =>
        currentIndex + 1 < HEADINGS.length ? currentIndex + 1 : 0
      );
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="absolute w-full  top-[25%] left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center gap-2">
        <p className="text-6xl font-semibold">Get your next</p>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeadingsIndex}
            className="absolute top-[42%]"
            initial={{ y: "30%", opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: "-70%", opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <p
              className="text-6xl font-medium"
              style={{ color: HEADINGS[currentHeadingsIndex].color }}
            >
              {HEADINGS[currentHeadingsIndex].name}
            </p>
          </motion.div>
        </AnimatePresence>
        <div className="flex gap-2 mt-28">
          {HEADINGS.map((heading, index) => (
            <div
              key={index}
              className="h-[0.7rem] w-[0.7rem] rounded-full cursor-pointer"
              style={{
                backgroundColor:
                  currentHeadingsIndex === index ? heading.color : "gray",
              }}
              onClick={() => setCurrentHeadingsIndex(index)}
            />
          ))}
        </div>
        <CarouselImages currentHeadingIndex={currentHeadingsIndex} />
      </div>
      <div
        className="rounded-full absolute bottom-4 left-1/2 transform -translate-x-1/2 p-3 animate-bounce cursor-pointer"
        style={{ backgroundColor: HEADINGS[currentHeadingsIndex].color }}
      >
        <DownAngleIcon className="text-white" />
      </div>
    </div>
  );
});

export default Carousel;
