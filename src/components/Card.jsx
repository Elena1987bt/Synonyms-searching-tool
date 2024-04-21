import React from "react";

const Card = () => {
  return (
    <div
      className="w-full
      
      pr-8
    lg:w-1/3"
    >
      <div className="bg-white shadow-lg rounded-lg overflow-hidden my-6 flex">
        <div className="p-6">
          <h2 className="text-sm md:text-xl font-semibold text-blue-600 font-medium hover:text-blue-800 mb-4">
            Fast Performance
          </h2>
          <div className="w-full">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded0">
              # Default
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ">
              Default
            </span>

            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ">
              Default
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
