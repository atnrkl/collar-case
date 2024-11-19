import React from "react";
import { PiBasket } from "react-icons/pi";

type Props = {};

type CardType = {
  title: string;
  text: string;
  buttonTitle: string;
  imgSrc: string;
};

const Card = (props: CardType) => {
  return (
    <div className="w-80 text-white bg-[#0f172a] rounded-lg shadow-md drop-shadow-md shadow-white ">
      <img src={props.imgSrc} />
      <div className="flex flex-col w-full h-full py-5 px-5 space-y-4">
        <h2 className="text-lg font-semibold">{props.title}</h2>
        <p className="font-light">{props.text}</p>
        <button className="flex flex-row outline items-center justify-center space-x-2 outline-2 py-2 px-2 rounded-lg">
          <PiBasket size={20} />
          <p>{props.buttonTitle}</p>
        </button>
      </div>
    </div>
  );
};

const SectionTwo = (props: Props) => {
  return (
    <div className="bg-[#0f172a] w-full h-full lg:px-24 lg:py-24 relative overflow-hidden">
      {/** Upper row */}
      <div className="mt-10 flex flex-col lg:flex-row text-white items-center justify-center lg:justify-between space-y-8 lg:space-y-0">
        <h2 className="text-3xl lg:text-5xl font-bold">The best of the best</h2>
        <button className="outline font-semibold outline-2 rounded-md py-3 px-8">
          Sign up now
        </button>
      </div>

      {/** Background with Shapes */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="w-64 h-64 bg-green-400 rounded-lg opacity-50 blur-2xl absolute top-10 left-10"></div>
        <div className="w-48 h-48 bg-purple-400 rounded-lg opacity-50 blur-lg absolute top-[200px] left-[40%]"></div>
        <div className="w-56 h-56 bg-green-400 rounded-lg opacity-40 blur-xl absolute top-[350px] right-[30%]"></div>
        <div className="w-56 h-56 bg-blue-400 rounded-lg opacity-40 blur-xl absolute top-[350px] right-[10%]"></div>
        <div className="w-40 h-40 bg-orange-400 rounded-lg opacity-60 blur-md absolute top-5 right-5"></div>
      </div>

      {/** Cards Container */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center mt-10 space-y-10 lg:space-y-0 lg:space-x-4">
        <Card
          buttonTitle="Buy Now"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          title="Title"
          imgSrc="/sneaker1.png"
        />
        <Card
          buttonTitle="Buy Now"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          title="Title"
          imgSrc="/sneaker1.png"
        />
        <Card
          buttonTitle="Buy Now"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          title="Title"
          imgSrc="/sneaker1.png"
        />
      </div>
    </div>
  );
};

export default SectionTwo;
