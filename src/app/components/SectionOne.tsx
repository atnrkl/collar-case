import Image from "next/image";
import { FiPlayCircle } from "react-icons/fi";
import { PiTrophyThin } from "react-icons/pi";
import { PiSirenThin } from "react-icons/pi";
import { PiWalletThin } from "react-icons/pi";

const SectionOne = () => {
  const borderRadius = "10px";

  return (
    <section
      style={{
        background: "linear-gradient(148deg, #fffbec 50%, #fef3c7 50%)",
      }}
      className="bg-[#fffbec] min-h-screen flex flex-col px-4 lg:px-24 items-center justify-center"
    >
      {/* Main Flex Container */}
      <div className="flex flex-col py-6 px-6 lg:flex-row items-center justify-center w-full h-full">
        {/* Left Content */}
        <div className="flex flex-col items-start justify-center w-full lg:w-1/2 text-start">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
            Collectible Sneakers
          </h1>
          <h4 className="mt-4 text-base md:text-lg lg:text-xl font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            aliquid molestias temporibus quo quas totam eos, ab quaerat ex
            tenetur.
          </h4>
          <div className="sm:w-full lg:w-auto flex flex-row gap-4 mt-8 items-center justify-center">
            <button className="px-2 py-2 lg:px-8 lg:py-3 outline outline-2 text-[#78350f] rounded">
              <h4 className="font-medium">Sign up now</h4>
            </button>
            <button className="px-2 py-2 lg:px-8 lg:py-3 flex flex-row text-[#78350f] font-medium items-center justify-around">
              <FiPlayCircle size={16} />
              <h4 className="px-2">Watch demo</h4>
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex items-center justify-center w-full lg:w-1/2 relative py-32 mt-16 lg:mt-0">
          {/* Geometry Box */}
          <div
            aria-label="geometry sneaker"
            className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] rounded-3xl bg-[#fbbf24] absolute z-0"
          ></div>
          {/* Sneaker Image */}
          <Image
            className="absolute z-10 rotate-6"
            src={"/sneaker1.png"}
            width={400}
            height={400}
            alt="sneaker"
          />
        </div>
      </div>

      {/* Additional Content */}
      <div className="flex flex-col lg:flex-row justify-around items-center pt-10 lg:pt-32 w-full gap-8 lg:gap-16 mt-16 mb-10">
        <div className="flex flex-col items-center lg:items-start ">
          {/* Icon Image 1 */}
          <div className="w-12 h-12 relative rounded-full flex items-center justify-center">
            <PiTrophyThin size={48} />
            <div
              style={
                {
                  "--r": borderRadius,
                } as React.CSSProperties
              }
              className="absolute -top-8 -right-5 rotate-45 triangle w-14 opacity-65 bg-blue-600"
            ></div>
          </div>
          <h4 className="my-2 text-base md:text-lg font-semibold">Feature 1</h4>
          <p className="text-sm md:text-base font-normal text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start  ">
          {/* Icon Image 2 */}
          <div className="relative w-12 h-12 rounded-full flex items-center justify-center">
            <PiSirenThin size={48} />
            <div className="absolute -top-4 right-0 triangle w-10 opacity-65 bg-green-600"></div>
          </div>
          <h4 className="my-2 text-base md:text-lg font-semibold">Feature 2</h4>
          <p className="text-sm md:text-base font-normal text-gray-600">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start ">
          {/* Icon Image 3 */}
          <div className="w-12 h-12 relative rounded-full flex items-center justify-center">
            <PiWalletThin size={48} />
            <div className="absolute bg-purple-500 w-10 h-10 -top-2 -right-4 opacity-60 rounded-2xl"></div>
          </div>
          <h4 className="my-2 text-base md:text-lg font-semibold">Feature 3</h4>
          <p className="text-sm md:text-base font-normal text-gray-600">
            Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
