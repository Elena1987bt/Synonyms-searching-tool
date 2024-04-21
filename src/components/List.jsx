import React from "react";
import Card from "../components/Card";
const List = () => {
  return (
    <div className="py-6 w-[70%] mx-auto">
      <h1 className="mb-6 capitalize font-extrabold tracking-tight leading-none text-white text-2xl lg:text-4xl">
        Full content
      </h1>

      <div className="flex flex-wrap  ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default List;
