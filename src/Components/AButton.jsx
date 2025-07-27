import React, { useState } from "react";

const AButton = ({ className, text, hoverColor }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setX(e.clientX - rect.left);
    setY(e.clientY - rect.top);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${className} group button flex items-center justify-center font-black relative overflow-hidden cursor-pointer`}
    >
      <p className="z-30 transition-all duration-500">{text}</p>
      <span
        className={`h-1 w-1 absolute z-0 rounded-full transition-all duration-500`}
        style={{
          backgroundColor: hoverColor,
          top: y + "px",
          left: x + "px",
          transform: hovered ? "scale(500)" : "scale(0)",
        }}
      />
    </div>
  );
};

export default AButton;
