import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import Hamburger from "./Hamburger";

gsap.registerPlugin(MorphSVGPlugin);

const SideMenu = () => {
  const [close, setClose] = useState(true);
  const topLine = useRef(null);
  const bottomLine = useRef(null);
  const sideMenuRef = useRef(null);
  const h = window.innerHeight;
  const inital = `M100 0 L100 ${h} Q100 ${h / 2} 100 0`;
  const exit = `M100 0 L100 ${h} Q-100 ${h / 2} 100 0`;

  const navLinks = [
    { title: "Home", id: "#Home" },
    { title: "Shop", id: "#Best-Sellers" },
    { title: "About", id: "#Contact" },
    { title: "Contact", id: "#Contact" },
  ];

  const handleNavClick = (id) => {
    const targetEl = document.querySelector(id);
    if (!targetEl) return;

    const targetY = targetEl.getBoundingClientRect().top + window.scrollY;
    const currentY = window.scrollY;
    const distance = Math.abs(targetY - currentY);

    const duration = Math.min(2, Math.max(0.3, distance / 1500));

    gsap.to(window, {
      scrollTo: { y: targetEl, offsetY: 0 },
      duration,
      ease: "cubic-bezier(0.76, 0, 0.24, 1)",
    });
  };

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
        <Hamburger topLine={topLine} bottomLine={bottomLine} />
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
            {navLinks.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="group cursor-pointer relative flex items-center gap-3 text-[5vh] font-black font-[Regular] focus:outline-none"
                >
                  <span className="h-3 w-3 rounded-full bg-white inline-block transform scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
                  <span>{item.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
