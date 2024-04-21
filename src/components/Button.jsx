import React from "react";

const Button = ({ children, setOpenModal }) => {
  return (
    <button
      onClick={() => setOpenModal(true)}
      className="absolute text-semibold bottom-8 left-8 text-white text-4xl lg:text-5xl transform transition duration-500 hover:scale-110 hover:cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
