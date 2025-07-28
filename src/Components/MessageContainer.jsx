import React from "react";

const MessageContainer = ({ messRef, descRef }) => {
  return (
    <div className="w-full flex items-center justify-center my-[15vh]">
      <div
        ref={messRef}
        className="text-[#d3965d] h-[50vh] w-[70%] font-black text-center flex items-center justify-center text-[5.2vh] font-[Regular]"
      >
        <p ref={descRef}>
          Discover furniture crafted with care, blending timeless craftsmanship,
          comfort and beauty – designed for modern living with refined elegance
          in every place.
        </p>
      </div>
    </div>
  );
};

export default MessageContainer;
