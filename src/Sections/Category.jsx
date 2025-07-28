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

    ScrollTrigger.matchMedia({
      // For screens >= 768px
      "(min-width: 768px)": function () {
        gsap.to(".tagdiv", {
          scrollTrigger: {
            trigger: ".tag",
            start: "top 40%",
            end: "top top",
            scrub: true,
          },
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "cubic-bezier(0.76, 0, 0.24, 1)",
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
          ease: "cubic-bezier(0.76, 0, 0.24, 1)",
        });
      },

      "(max-width: 767px)": function () {
        gsap.to(".tagdiv", {
          scrollTrigger: {
            trigger: ".tag",
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "cubic-bezier(0.76, 0, 0.24, 1)",
        });

        gsap.to(".cat", {
          scrollTrigger: {
            trigger: ".main",
            start: "top 50%",
            end: "bottom 80%",
            scrub: true,
          },
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          stagger: 0.4,
          ease: "cubic-bezier(0.76, 0, 0.24, 1)",
        });
      },
    });
  });

  return (
    <div className="main py-[10vh] md:py-0 flex-col md:h-[100dvh] flex w-[100dvw] md:flex-row items-center gap-[5vh] md:gap-[5vw]">
      <div className="tag md:h-full md:w-[40%] mb-[5vh] md:mb-0 flex-none flex flex-col justify-center items-center">
        <div
          style={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" }}
          className="tagdiv bg-[#69523c] text-[#fbbc82] md:text-[4vh] font-black p-[4vh] -rotate-6 rounded-xl shadow-lg"
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
            clipPath:
              window.innerWidth < 768
                ? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                : "none",
          }}
          className="cat min-w-96 min-h-[30vh] md:h-[60%] rounded-4xl relative p-[2%] flex flex-col justify-between shadow-[0px_2px_4px_#00000050] hover:scale-101 hover:shadow-[0px_4px_20px_#00000050] cursor-pointer transition-all duration-500"
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
