import React from "react";
import { useState } from "react";

const IntroText = ({ setOpenModal }) => {
  return (
    <>
      <h1 className="mb-6 capitalize font-extrabold tracking-tight leading-none text-white text-4xl lg:text-6xl">
        Synonyms search tool
      </h1>
      <p className="mt-20 md:mt-0 mb-10 text-md font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        🌟 Start searching synonyms for words from our dictionary or{" "}
        <button
          onClick={() => setOpenModal(true)}
          className="-2 text-blue-400 underline transform transition duration-500 hover:text-blue-600 hover:cursor-pointer"
        >
          create new ones
        </button>{" "}
        by simply using this amazing tool 🌟
      </p>
    </>
  );
};

export default IntroText;
