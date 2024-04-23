import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ onSubmit, activeSearch, setActiveSearch, setShow }) => {
  const handleSearch = (e) => {
    if (e.target.value == "") {
      setActiveSearch("");
      /*     setShow(false); */
      return false;
    }
    setActiveSearch(e.target.value.trim());
  };

  // handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit(e);

      /*   setActiveSearch(""); */
    }
  };
  return (
    <form className="md:w-[500px] mx-auto">
      <div className="relative">
        <input
          type="search"
          autoFocus
          placeholder="Type Here..."
          className="w-full p-4 rounded-full bg-white-800"
          onChange={(e) => handleSearch(e)}
          value={activeSearch}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={onSubmit}
          className="absolute right-1 top-1/2 -translate-y-1/2 md:w-32 py-4 md:py-3 px-4 bg-blue-600 rounded-full text-white transform transition duration-500 hover:bg-blue-700"
        >
          <div className="flex items-center">
            <span className=""></span>
            <AiOutlineSearch />
            <span className="ml-3 text-md hidden md:block">Search</span>
          </div>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
