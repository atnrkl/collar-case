"use client";

import React, { useState, useEffect } from "react";
import { PiCaretCircleLeft, PiCaretCircleRight } from "react-icons/pi";
import { IconType } from "react-icons";
import { PiCatLight } from "react-icons/pi";

type Props = {};

type CardProps = {
  companyName: string;
  icon: IconType;
  img: string;
  name: string;
  position: string;
  desc: string;
};

const CardTile = ({
  companyName,
  desc,
  icon: Icon,
  img,
  name,
  position,
}: CardProps) => {
  return (
    <div className="flex-shrink-0 flex flex-col py-4 md:py-6 px-3 md:px-4 bg-white mx-2 shadow-lg rounded-lg h-[380px] md:h-[450px] w-[240px]">
      <div className="flex items-center space-x-2 text-gray-800 pb-4">
        <Icon size={24} className="flex-shrink-0" />
        <h3 className="font-semibold text-base md:text-lg line-clamp-1">
          {companyName}
        </h3>
      </div>
      <div className="flex flex-col justify-between h-full">
        <p className="font-medium text-sm line-clamp-6 mb-4">{desc}</p>
        <div className="flex items-center space-x-3 mt-auto">
          <img
            className="rounded-full w-10 h-10 md:w-12 md:h-12 object-cover flex-shrink-0"
            src={img}
            alt={name}
          />
          <div>
            <h3 className="font-medium text-sm line-clamp-1">{name}</h3>
            <p className="font-medium text-gray-500 text-xs line-clamp-1">
              {position}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionFour = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);

      if (width < 768) {
        setVisibleCount(1);
      } else if (width < 1024) {
        setVisibleCount(2);
      } else if (width < 1280) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const cards = [
    {
      companyName: "Company A",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam deleniti eum eligendi, nesciunt nostrum praesentium sit quisquam exercitationem dolorem porro!",
      icon: PiCatLight,
      img: "https://xsgames.co/randomusers/avatar.php?g=female",
      name: "John Doe",
      position: "Position A",
    },
    {
      companyName: "Company A",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam deleniti eum eligendi, nesciunt nostrum praesentium sit quisquam exercitationem dolorem porro!",
      icon: PiCatLight,
      img: "https://xsgames.co/randomusers/avatar.php?g=female",
      name: "John Doe",
      position: "Position A",
    },
    {
      companyName: "Company A",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam deleniti eum eligendi, nesciunt nostrum praesentium sit quisquam exercitationem dolorem porro!",
      icon: PiCatLight,
      img: "https://xsgames.co/randomusers/avatar.php?g=female",
      name: "John Doe",
      position: "Position A",
    },
    {
      companyName: "Company A",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam deleniti eum eligendi, nesciunt nostrum praesentium sit quisquam exercitationem dolorem porro!",
      icon: PiCatLight,
      img: "https://xsgames.co/randomusers/avatar.php?g=female",
      name: "John Doe",
      position: "Position A",
    },
    {
      companyName: "Company A",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam deleniti eum eligendi, nesciunt nostrum praesentium sit quisquam exercitationem dolorem porro!",
      icon: PiCatLight,
      img: "https://xsgames.co/randomusers/avatar.php?g=female",
      name: "John Doe",
      position: "Position A",
    },
    {
      companyName: "Company A",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam deleniti eum eligendi, nesciunt nostrum praesentium sit quisquam exercitationem dolorem porro!",
      icon: PiCatLight,
      img: "https://xsgames.co/randomusers/avatar.php?g=female",
      name: "John Doe",
      position: "Position A",
    },
    {
      companyName: "Company A",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam deleniti eum eligendi, nesciunt nostrum praesentium sit quisquam exercitationem dolorem porro!",
      icon: PiCatLight,
      img: "https://xsgames.co/randomusers/avatar.php?g=female",
      name: "John Doe",
      position: "Position A",
    },
    {
      companyName: "Company A",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam deleniti eum eligendi, nesciunt nostrum praesentium sit quisquam exercitationem dolorem porro!",
      icon: PiCatLight,
      img: "https://xsgames.co/randomusers/avatar.php?g=female",
      name: "John Doe",
      position: "Position A",
    },
  ];

  const totalCards = cards.length;
  const cardWidth = 240;
  const gap = 16;

  const handleLeftClick = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleRightClick = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalCards - visibleCount));
  };

  const translateX =
    screenWidth < 768
      ? (cardWidth + gap) * currentIndex - (screenWidth - cardWidth) / 2
      : (cardWidth + gap) * currentIndex;

  return (
    <section className="bg-[#fffdf5] py-4 md:py-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-3 md:px-6 space-y-3 md:space-y-0">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold">
          Because they love us
        </h2>
        <div className="flex space-x-2">
          <button
            className={`transition-opacity ${
              currentIndex === 0 ? "opacity-50" : "hover:opacity-75"
            }`}
            onClick={handleLeftClick}
            disabled={currentIndex === 0}
          >
            <PiCaretCircleLeft size={32} />
          </button>
          <button
            className={`transition-opacity ${
              currentIndex >= totalCards - visibleCount
                ? "opacity-50"
                : "hover:opacity-75"
            }`}
            onClick={handleRightClick}
            disabled={currentIndex >= totalCards - visibleCount}
          >
            <PiCaretCircleRight size={32} />
          </button>
        </div>
      </div>
      <div className="relative mt-10 px-3 md:px-6">
        <div className="bg-[#fde68a] absolute left-14 right-14 top-[-20px] bottom-10 "></div>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${translateX}px)`,
              gap: `${gap}px`,
            }}
          >
            {cards.map((card, index) => (
              <CardTile key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
