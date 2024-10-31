import React from "react";

import { motion } from "framer-motion";
import uuid from "react-uuid";
import { HEADINGS, TILES_MARGINS } from "../assets/Headings";

const CarouselImages = ({ currentHeadingIndex }) => {
  // Create a function for staggered animation
  const transition = (index) => ({
    duration: 1 + index / 10, // You can tweak the duration
    ease: "easeInOut",
    delay: index * 0.2, // Add delay based on index for staggered effect
  });

  return (
    <div className="grid grid-cols-7 gap-4 mt-76 h-full w-full">
      {TILES_MARGINS.map((margin, index) => (
        <div key={index}>
          {HEADINGS.map(
            (Heading, headingIndex) =>
              currentHeadingIndex === headingIndex && (
                <motion.div
                  key={uuid()}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 20, opacity: 1 }}
                  exit={{ y: "-50%", opacity: 0 }}
                  transition={transition(index)} // Apply the staggered transition
                  className="relative"
                >
                  <div
                    className="absolute w-full h-[30rem]"
                    style={{ transform: `translateY(${margin})` }} // Apply margin here to shift the entire block
                  >
                    <motion.img
                      className="w-full h-96 rounded-2xl object-cover"
                      src={`/images/${HEADINGS[currentHeadingIndex].section}/${
                        HEADINGS[currentHeadingIndex].section
                      }-${index * 2}.jpeg`}
                      alt={index * 2}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={transition(index)} // Stagger the first image
                    />
                    <motion.img
                      className="w-full h-96 rounded-3xl object-cover mt-4"
                      src={`/images/${HEADINGS[currentHeadingIndex].section}/${
                        HEADINGS[currentHeadingIndex].section
                      }-${index * 2 + 1}.jpeg`}
                      alt={index * 2 + 1}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={transition(index + 0.5)} // Stagger the second image with a slight delay
                    />
                  </div>
                </motion.div>
              )
          )}
        </div>
      ))}
    </div>
  );
};

export default CarouselImages;
