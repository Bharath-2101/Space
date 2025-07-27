import React, { useRef } from "react";
import { images } from "../constants";
import AButton from "../Components/AButton";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

const Hero = () => {
  const descRef = useRef();
  const messRef = useRef();

  useGSAP(() => {
    const descWords = new SplitText(descRef.current, { type: "chars words" });
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
  });

  return (
    <>
      <div className="h-[100vh] w-[100vw] flex flex-col ">
        <div className="h-[10vh] w-full px-[2vw] py-[2vh]">
          <img src={images.TextwithLogo} className="h-full" />
        </div>
        <div className="py-[5vh] px-[2vw] font-[Regular] grid grid-cols-[9fr_11fr]">
          <div className="flex flex-col gap-[3vh] px-2">
            <h1 className="w-full text-[10vh] font-black text-[#8E755D] font-[Black] leading-17">
              Timeless Design Everyday Comfort.
            </h1>
            <p className="w-full font-[Regular] font-[500] text-[3vh] text-[#898989] ml-[2%]">
              Modern element meeting last longing comfort. Our Furniture is
              crafted to inspire and designed for your contemporary life.
            </p>
            <div className="w-[90%] flex flex-row items-center gap-[3%] mt-[15%] justify-center">
              <AButton
                className="bg-[#b38d69] w-[30%] py-[1.7vh] border-2 border-[#00000050] rounded-4xl text-white hover:text-[#6b5949]"
                text="SHOP MORE"
                hoverColor="white"
              />
              <AButton
                className="bg-[#b38d69] w-[30%] py-[1.7vh] border-2 border-[#00000050] rounded-4xl text-white hover:text-[#6b5949]"
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
      <div className="w-full flex items-center justify-center my-[15vh]">
        <div
          ref={messRef}
          className="text-[#8E755D] h-[50vh] w-[70%] font-black text-center flex items-center justify-center text-[5.2vh] font-[Regular]"
        >
          <p ref={descRef}>
            Discover furniture crafted with care, blending timeless
            craftsmanship, comfort and beauty – designed for modern living with
            refined elegance in every place.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
