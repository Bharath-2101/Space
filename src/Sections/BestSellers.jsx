import React, { useEffect, useRef, useState } from "react";
import AButton from "../Components/AButton";
import { images } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Footer from "./Footer";

const BestSellers = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const container = useRef(null);
  const mainRef = useRef(null);
  const items = [
    { title: "Space Arm Chair", image: images.Armchair, color: "#4A403A" },
    {
      title: "Space Living Room Sofa",
      image: images.CozySofa,
      color: "#2D2A26",
    },
    { title: "Space Soft Bed", image: images.CozyBed, color: "#B0AFA7" },
    { title: "Ignited Lamp", image: images.Lamp, color: "#D4C2A8" },
  ];
  useEffect(() => {
    const el = container.current;

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    if (!mediaQuery.matches) return;

    const moveContainerX = gsap.quickTo(el, "left", {
      duration: 0.5,
      ease: "power3",
    });

    const moveContainerY = gsap.quickTo(el, "top", {
      duration: 0.5,
      ease: "power3",
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const rect = el.getBoundingClientRect();
      const offsetX = rect.width / 2;
      const offsetY = rect.height / 2;
      moveContainerX(clientX - offsetX);
      moveContainerY(clientY - offsetY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const el = container.current;
    const width = window.innerWidth;

    if (width >= 1024) {
      gsap.to(el, {
        scale: modal.active ? 1 : 0,
        duration: 0.5,
        ease: "cubic-bezier(0.76, 0, 0.24, 1)",
      });
    } else if (width >= 768) {
      gsap.to(el, {
        scale: modal.active ? 1 : 0,
        opacity: modal.active ? 1 : 0,
        duration: 0.4,
        ease: "cubic-bezier(0.76, 0, 0.24, 1)",
      });
    } else {
      gsap.set(el, { scale: 0, opacity: 0 });
    }
  }, [modal.active]);
  return (
    <div
      ref={mainRef}
      id="Best-Sellers"
      className="relative w-full md:pb-[20vh]"
    >
      <div className="h-[20vh] w-full flex flex-row items-center justify-between px-[5vw]">
        <h1 className="font-black font-[Regular] text-[3vh] md:text-[6vh] text-[#d3965d]">
          BEST SELLERS
        </h1>
        <AButton
          text="Explore"
          hoverColor="white"
          className=" bg-[#d3965d] border-2 hover:text-[#d3965d] border-[#00000050] text-white py-[1.2vh] md:text-[4vh] font-[Regular] px-[3vw] text-center rounded-full"
        />
      </div>
      <div className={`w-full flex flex-col relative cursor-pointer`}>
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full flex items-center justify-center text-[#d3965d] hover:text-[#d3965d63]"
            onMouseEnter={() => setModal({ active: true, index: index })}
            onMouseLeave={() => setModal({ active: false, index: index })}
          >
            <div
              style={{
                borderTopWidth: index == 0 ? 2 : 0,
                borderBottomWidth: 2,
                borderColor: "#d3965d50",
              }}
              className="flex flex-row justify-between items-center w-[80%] py-[5vh]"
            >
              <h1 className="font-[Regular] font-black text-[2vh] md:text-[4vh]">
                {item.title}
              </h1>
              <img
                src={item.image}
                style={{ aspectRatio: 16 / 9 }}
                alt=""
                className="md:hidden h-[7vh] rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
      <div
        ref={container}
        className={`h-[30vh] w-[35vh] absolute bg-black overflow-hidden flex items-center justify-center z-50 pointer-events-none`}
      >
        <div
          style={{
            top: modal.index * -100 + "%",
            transition: "top 0.3s cubic-bezier(0.76, 0, 0.24, 1)",
          }}
          className="h-full w-full absolute"
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="relative h-[30vh] w-full flex items-center justify-center"
              style={{ backgroundColor: item.color }}
            >
              <img src={item.image} alt="" className="h-auto w-[25vh]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
