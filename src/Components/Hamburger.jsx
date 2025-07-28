import React from "react";

const Hamburger = ({ topLine, bottomLine }) => {
  return (
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
  );
};

export default Hamburger;
