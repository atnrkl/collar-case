import React from "react";

import { PiCheck } from "react-icons/pi";

type Props = {};

const SectionThree = (props: Props) => {
  return (
    <section className="bg-[#fffdf3] flex items-center justify-center w-full min-h-screen px-4 sm:px-8 lg:px-44">
      <div className="bg-white w-full flex flex-col lg:flex-row items-center justify-center py-10 px-6 sm:px-10 shadow-md rounded-xl relative overflow-visible">
        {/** Left Section */}
        <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold pb-5">
            Why Join Us
          </h2>
          <div className="flex flex-row items-center space-x-2 justify-center lg:justify-start">
            <PiCheck size={16} color="green" />
            <p className="text-sm sm:text-base font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-row items-center space-x-2 justify-center lg:justify-start">
            <PiCheck size={16} color="green" />
            <p className="text-sm sm:text-base font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-row items-center space-x-2 justify-center lg:justify-start">
            <PiCheck size={16} color="green" />
            <p className="text-sm sm:text-base font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <button className="outline outline-2 text-[#78350f] py-3 px-5 rounded-lg mt-4">
            <p className="font-medium">Sign up now</p>
          </button>
        </div>

        {/** Video & Geometry */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 relative overflow-visible">
          {/** Video Geometry */}
          <img
            src="/videoGeometry.png"
            alt="video Geometry"
            className="absolute -top-10 -right-10 lg:right-[-100px] w-[300px] sm:w-[400px] lg:w-[600px] lg:h-[500px] h-auto z-0"
          />

          {/** Video Splash */}
          <img
            src="/videoSplash.png"
            alt="video Splash"
            className="relative z-10 w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
