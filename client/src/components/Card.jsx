import React from "react";

const Card = ({ el }) => {
  return (
    <div
      className="w-full
      pr-8
    lg:w-1/3"
    >
      <div className="bg-white shadow-lg rounded-lg overflow-hidden my-6 flex min-h-[150px] h-auto">
        <div className="p-6">
          <h2 className="text-sm md:text-xl font-semibold text-blue-600 font-medium hover:text-blue-800 mb-4">
            {el.word}
          </h2>
          <div className="w-full">
            {el?.synonyms?.map((el, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded0"
              >
                # {el}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
