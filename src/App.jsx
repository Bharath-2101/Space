import React from "react";
import Hero from "./Sections/Hero";
import SideMenu from "./Components/SideMenu";
import Category from "./Sections/Category";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import BestSellers from "./Sections/BestSellers";
import Testimonals from "./Sections/Testimonals";

gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <SideMenu />
      <Hero />
      <Category />
      <BestSellers />
      <Testimonals />
    </div>
  );
};

export default App;
