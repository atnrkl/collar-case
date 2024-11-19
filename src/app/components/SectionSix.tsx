"use client";

import React, { useState } from "react";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import CountUp from "./utils/Countup";

type Props = {};

const SectionSix = (props: Props) => {
  const [clickedTooltip, setClickedTooltip] = useState<number | null>(null);

  const handleBubbleClick = (id: number) => {
    setClickedTooltip((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-[#78350f] w-full min-h-screen flex justify-center items-center p-4">
      <div className="relative w-full max-w-[1200px] h-[500px] md:h-[800px] overflow-hidden">
        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
          <h4 className="md:text-5xl font-bold text-white">
            <CountUp
              className="text-5xl lg:text-9xl"
              start={0}
              end={11658467}
              duration={3}
              separator=","
            />
          </h4>
          <h5 className="text-2xl md:text-5xl font-semibold text-white">
            shoes collected
          </h5>
        </div>

        {/* Desktop Map (Hidden on Mobile) */}
        <img
          className="absolute w-full h-full  top-0 left-0 overflow-hidden lg:object-contain z-10 hidden md:block"
          src="/map.svg"
          alt="Map"
        />

        {/* Mobile Map (Hidden on Desktop) */}
        <img
          className="absolute w-full h-full object-contain top-0 left-0 z-10 block md:hidden"
          src="mobileMap.png"
          alt="Mobile Map"
        />

        {/* Elipses Bubbles (Hidden on Mobile) */}
        <TooltipProvider>
          <div className="hidden md:block">
            {[
              { id: 1, x: "31%", y: "35%", size: 30 },
              { id: 2, x: "40%", y: "25%", size: 20 },
              { id: 3, x: "74%", y: "52%", size: 20 },
              { id: 4, x: "12%", y: "44%", size: 30 },
              { id: 5, x: "30%", y: "68%", size: 20 },
              { id: 6, x: "32%", y: "65%", size: 20 },
              { id: 7, x: "20%", y: "48%", size: 20 },
              { id: 8, x: "54%", y: "60%", size: 30 },
              { id: 9, x: "84%", y: "69%", size: 30 },
              { id: 10, x: "84%", y: "52%", size: 20 },
            ].map((bubble) => (
              <Tooltip key={bubble.id} open={clickedTooltip === bubble.id}>
                <TooltipTrigger asChild>
                  <div
                    className={`absolute rounded-full border-2 border-green-500 cursor-pointer z-30`}
                    style={{
                      top: bubble.y,
                      left: bubble.x,
                      width: `${bubble.size}px`,
                      height: `${bubble.size}px`,
                      backgroundColor:
                        clickedTooltip === bubble.id
                          ? "rgba(34, 197, 94, 0.5)"
                          : "transparent",
                    }}
                    onClick={() => handleBubbleClick(bubble.id)}
                  ></div>
                </TooltipTrigger>
                <TooltipContent
                  className="bg-white text-black rounded shadow z-40"
                  side="top"
                  sideOffset={5}
                >
                  <div className="w-44 rounded-xl">
                    <img
                      width={200}
                      className="size-fit"
                      src="/mapShoes.png"
                      alt="map shoes"
                    />
                  </div>
                  <div className="p-2">
                    <p>Bubble {bubble.id} Info</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default SectionSix;
