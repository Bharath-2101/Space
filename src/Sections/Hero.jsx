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
      <div id="Home" className="min-h-[100svh] w-full flex flex-col">
        <div className="h-[10vh] w-full px-[2vw] py-[2vh]">
          <Magnetic className="h-full w-auto">
            <img
              src={images.TextwithLogo}
              className="h-full w-full object-contain"
              alt="Logo"
            />
          </Magnetic>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-none px-[2vw] py-[5vh] gap-y-8 md:gap-0 font-[Regular]">
          <div className="flex flex-col items-center md:items-start gap-[3vh] md:gap-[5vh] order-2 md:order-1">
            <h1
              ref={heroTitle}
              className="w-[90%] md:w-full text-center md:text-left font-black text-[#d3965d] font-[Black]"
              style={{
                fontSize: "clamp(2rem, 6vw, 8vh)",
                lineHeight: "1.1",
              }}
            >
              Timeless Design Everyday Comfort.
            </h1>

            <p
              ref={heroDesc}
              className="w-[90%] md:w-full text-center md:text-left font-[Regular] font-medium text-[#898989]"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 3vh)",
              }}
            >
              Modern element meeting long-lasting comfort. Our Furniture is
              crafted to inspire and designed for your contemporary life.
            </p>

            <div className="flex flex-row gap-4 mt-[5vh] md:mt-[10vh] w-[90%] md:w-full justify-center ">
              <AButton
                className="bg-[#d3965d] w-full md:w-[30%] py-3 border-2 border-[#00000050] rounded-3xl text-white hover:text-[#d3965d]"
                text="SHOP MORE"
                hoverColor="white"
              />
              <AButton
                className="bg-[#d3965d] w-full md:w-[30%] py-3 border-2 border-[#00000050] rounded-3xl text-white hover:text-[#d3965d]"
                text="LEARN MORE"
                hoverColor="white"
              />
            </div>
          </div>

          <div className="overflow-hidden w-full h-full order-1 md:order-2">
            <img
              src={images.heroImage}
              alt="Hero Furniture"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>

      <MessageContainer messRef={messRef} descRef={descRef} />
    </>
  );
};

export default Hero;
