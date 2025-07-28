import React from "react";
import Hero from "./Sections/Hero";
import SideMenu from "./Components/SideMenu";
import Category from "./Sections/Category";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import BestSellers from "./Sections/BestSellers";
import Footer from "./Sections/Footer";

gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="min-h-screen bg-[#ffffff] relative">
      <SideMenu />
      <Hero />
      <Category />
      <BestSellers />
      <Footer />
    </div>
  );
};

export default App;
