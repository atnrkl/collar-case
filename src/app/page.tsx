import React from "react";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import Footer from "./components/Footer";
import Menubar from "./components/Menubar";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full h-full">
      <Menubar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </div>
  );
};

export default page;
