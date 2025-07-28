import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

const SideMenu = () => {
  const [close, setClose] = useState(true);
  const topLine = useRef(null);
  const bottomLine = useRef(null);
  const sideMenuRef = useRef(null);
  const h = window.innerHeight;
  const inital = `M100 0 L100 ${h} Q100 ${h / 2} 100 0`;
  const exit = `M100 0 L100 ${h} Q-100 ${h / 2} 100 0`;

  const handleClick = () => {
    const tl = gsap.timeline({
      ease: "cubic-bezier(0.76, 0, 0.24, 1)",
      duration: 0.5,
    });
    if (close) {
      tl.to(
        topLine.current,
        {
          rotation: 45,
          y: 10,
          transformOrigin: "50% 50%",
        },
        0
      )
        .to(
          bottomLine.current,
          {
            rotation: -45,
            y: -10,
            transformOrigin: "50% 50%",
          },
          0
        )
        .to(
          sideMenuRef.current,
          {
            x: 0,
          },
          0
        )
        .to(
          "#curve",
          {
            morphSVG: inital,
          },
          0
        );
    } else {
      tl.to(
        topLine.current,
        {
          rotation: 0,
          y: 0,
        },
        0
      )
        .to(
          bottomLine.current,
          {
            rotation: 0,
            y: 0,
          },
          0
        )
        .to(
          sideMenuRef.current,
          {
            x: "100%",
          },
          0
        )
        .to(
          "#curve",
          {
            morphSVG: exit,
          },
          0
        );
    }

    setClose(!close);
  };

  useEffect(() => {
    gsap.set(sideMenuRef.current, { x: "100%" });
  }, []);

  return (
    <>
      <div
        className="fixed top-[2vh] right-[2vw] cursor-pointer z-100 "
        onClick={handleClick}
      >
        <svg
          height="8vh"
          width="8vh"
          className="bg-[#d3965d] rounded-full p-[1vh]"
          viewBox="0 0 100 100"
        >
          <line
            ref={topLine}
            x1="25"
            y1="40"
            x2="75"
            y2="40"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <line
            ref={bottomLine}
            x1="25"
            y1="60"
            x2="75"
            y2="60"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div
        ref={sideMenuRef}
        className="fixed top-0 right-0 h-screen w-[500px] flex z-40"
      >
        <svg className="h-screen w-[100px]">
          <path id="curve" d={exit} fill="#d3965d" />
        </svg>
        <div className="bg-[#d3965d] text-white p-8 flex flex-col gap-6 pt-[10vh] w-[400px]">
          <div className="text-[2vh] text-[#ffffffad] font-[Regular] font-black mb-4 p-[5%] text-center border-b-2 border-[#ffffff1c]">
            <h2>Navigation</h2>
          </div>
          <ul className="flex flex-col gap-4 text-lg">
            {["Home", "Shop", "About", "Contact"].map((item, index) => (
              <li
                key={index}
                className=" group cursor-pointer relative flex items-center text-[5vh] font-black font-[Regular] gap-3"
              >
                <span className="h-3 w-3 rounded-full bg-white inline-block scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
