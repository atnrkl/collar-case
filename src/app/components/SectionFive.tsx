"use client";

import React, { useState } from "react";
import { PiArrowRight } from "react-icons/pi";
import { PiCatLight } from "react-icons/pi";

type Props = {};

const SectionFive = (props: Props) => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const buttonTexts = [
    {
      icon: PiCatLight,
      title: "lorem ipsum",
    },
    {
      icon: PiCatLight,
      title: "lorem ipsum",
    },
    {
      icon: PiCatLight,
      title: "lorem ipsum",
    },
    {
      icon: PiCatLight,
      title: "lorem ipsum",
    },
    {
      icon: PiCatLight,
      title: "lorem ipsum",
    },
    {
      icon: PiCatLight,
      title: "lorem ipsum",
    },
  ];

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <section
      className="bg-[#fefdf8] relative min-h-screen flex flex-col px-6 md:px-24 py-10"
      style={{
        backgroundImage: `url('/vaves.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      {/* Text Content */}
      <div className="justify-center max-w-xl md:max-w-4xl mb-8 py-6 md:py-16 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Grow Your Collection
        </h2>
        <p className="text-gray-600 font-medium">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          doloribus in, ad pariatur harum itaque maiores natus ex odio fuga
          vero, ipsa dolorem dolores libero, voluptatum quod cupiditate.
        </p>
      </div>

      {/* Buttons and Image */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 w-full">
        {/* Buttons Section */}
        <div className="flex flex-col gap-4 md:w-1/4 w-full text-center md:text-left">
          {buttonTexts.map((item, index) => (
            <button
              key={index}
              className={`flex items-center font-semibold justify-start px-4 py-2 rounded transition-all space-x-2 w-full md:w-44 ${
                activeButton === index
                  ? "bg-white shadow-md text-gray-800"
                  : "bg-transparent text-black"
              }`}
              onClick={() => handleButtonClick(index)}
            >
              <span>{<item.icon />}</span>
              {/* Text */}
              <span>{item.title}</span>
              {/* Right icon */}
              {activeButton === index && <PiArrowRight />}
            </button>
          ))}
        </div>

        {/* Image Section */}
        <img
          className="w-full md:w-3/4 max-h-full object-contain"
          src="/windowImages.png"
          alt="Collection illustration"
        />
      </div>
    </section>
  );
};

export default SectionFive;
