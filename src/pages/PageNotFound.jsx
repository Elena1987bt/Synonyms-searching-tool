import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="bg-gray-950 h-screen flex flex-col justify-center items-center">
      <h1 className="md:text-5xl text-white">Page not found 😢</h1>
      <Link
        to="/"
        className="mt-8 text-white w-40 rounded py-3 px-2 bg-blue-600 text-center text-white transform transition duration-500 hover:bg-blue-700"
      >
        Back to Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
