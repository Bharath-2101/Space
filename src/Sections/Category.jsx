import React, { useRef } from "react";
import { images } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Category = () => {
  const categories = [
    { title: "CHAIRS", image: images.chair },
    { title: "DRAWERS", image: images.Drawer },
    { title: "LAMPS", image: images.Lamp },
    { title: "Special Desks", image: images.chair },
  ];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".tagdiv", {
      scrollTrigger: {
        trigger: ".tag",
        start: "top 40%",
        end: "top top",
        scrub: true,
      },
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    });

    gsap.to(".main", {
      scrollTrigger: {
        trigger: ".main",
        start: "top top",
        end: "+=1100 top",
        scrub: true,
        pin: true,
      },
      x: -1100,
    });
  });

  return (
    <div className="main h-[100dvh] flex w-[100dvw] flex-row items-center gap-[5vw]">
      <div className="tag h-full w-[40%] flex-none flex flex-col justify-center items-center">
        <div
          style={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" }}
          className="tagdiv bg-[#69523c] text-[#fbbc82] text-[4vh] font-black p-[4vh] -rotate-6 rounded-xl shadow-lg"
        >
          Explore Our Crafted Pieces
        </div>
      </div>
      {categories.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="min-w-96 h-[60%] rounded-4xl relative p-[2%] flex flex-col justify-between shadow-[0px_2px_4px_#00000050] hover:scale-101 hover:shadow-[0px_4px_20px_#00000050] cursor-pointer transition-all duration-500"
        >
          <h1 className="w-full text-[#ffffff] font-[Regular] font-black text-[4.5vh]">
            {item.title}
          </h1>
          <h1 className="bg-white w-[15%] text-[3.8vh] p-[1%] text-center rounded-xl">
            {index + 1 < 10 ? "0" + (index + 1) : index + 1}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Category;
