import React, { useRef } from "react";
import { images } from "../constants";
import AButton from "../Components/AButton";
import MessageContainer from "../Components/MessageContainer";
import Magnetic from "../Components/Magnetic";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

const Hero = () => {
  const descRef = useRef();
  const messRef = useRef();
  const heroTitle = useRef();
  const heroDesc = useRef();

  useGSAP(() => {
    const descWords = new SplitText(descRef.current, { type: "chars words" });
    const heroTitleWords = new SplitText(heroTitle.current, {
      type: "words lines",
      wordsClass: "zeroClippath",
    });
    const heroDescWords = new SplitText(heroDesc.current, {
      type: "chars words",
      mask: "words",
    });
    gsap.from(descWords.words, {
      scrollTrigger: {
        trigger: messRef.current,
        start: "top 70%",
        end: "top 40%",
        scrub: true,
      },
      color: "#fbbc8240",
      filter: "blur(2px)",
      stagger: 0.1,
      ease: "bounce",
    });

    gsap
      .timeline()
      .to(heroTitleWords.words, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        stagger: 0.5,
        ease: "cubic-bezier(0.76, 0, 0.24, 1)",
      })
      .from(heroDescWords.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.06,
        ease: "cubic-bezier(0.76, 0, 0.24, 1)",
      });
  });

  return (
    <>
      <div id="Home" className="h-[100vh] w-[100vw] flex flex-col ">
        <div className="h-[10vh] w-full px-[2vw] py-[2vh] overflow-visible">
          <Magnetic className="h-full w-auto">
            <img
              src={images.TextwithLogo}
              className="h-full w-full object-contain"
              alt="Logo"
            />
          </Magnetic>
        </div>

        <div className="py-[5vh] px-[2vw] font-[Regular] grid grid-cols-[9fr_11fr]">
          <div className="flex flex-col gap-[3vh] px-2">
            <h1
              ref={heroTitle}
              className="w-full text-[10vh] font-black text-[#d3965d] font-[Black] leading-17 "
            >
              Timeless Design Everyday Comfort.
            </h1>
            <p
              ref={heroDesc}
              className="w-full font-[Regular] font-[500] text-[3vh] text-[#898989] ml-[2%]"
            >
              Modern element meeting last longing comfort. Our Furniture is
              crafted to inspire and designed for your contemporary life.
            </p>
            <div className="w-[90%] flex flex-row items-center gap-[3%] mt-[15%] justify-center">
              <AButton
                className="bg-[#d3965d] w-[30%] py-[1.7vh] border-2 border-[#00000050] rounded-4xl text-white hover:text-[#d3965d]"
                text="SHOP MORE"
                hoverColor="white"
              />
              <AButton
                className="bg-[#d3965d] w-[30%] py-[1.7vh] border-2 border-[#00000050] rounded-4xl text-white hover:text-[#d3965d]"
                text="LEARN MORE"
                hoverColor="white"
              />
            </div>
          </div>
          <div className="overflow-hidden w-full h-full">
            <img
              src={images.heroImage}
              alt="Hero Furniture"
              className="h-full w-full object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
      <MessageContainer messRef={messRef} descRef={descRef} />
    </>
  );
};

export default Hero;
