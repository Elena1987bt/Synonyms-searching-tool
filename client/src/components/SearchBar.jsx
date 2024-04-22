import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const [activeSearch, setActiveSearch] = useState("");
  const [loading, setLoading] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = (e) => {
    if (e.target.value == "") {
      setActiveSearch("");
      return false;
    }
    setActiveSearch(e.target.value.trim());
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("loading...");
    setData(null);
    setError(null);
    try {
      const response = await fetch(
        `http://localhost:8000/words/search?word=${activeSearch}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }
      let res = await response.json();
      console.log(res?.result);
      setData(res?.result);
      setError(null);
      /* setActiveSearch(" "); */
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };
  // handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
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
          onClick={handleSubmit}
          className="absolute right-1 top-1/2 -translate-y-1/2 md:w-32 py-4 md:py-3 px-4 bg-blue-600 rounded-full text-white transform transition duration-500 hover:bg-blue-700"
        >
          <div className="flex items-center">
            <span className=""></span>
            <AiOutlineSearch />
            <span className="ml-3 text-md hidden md:block">Search</span>
          </div>
        </button>
      </div>
      {activeSearch.length > 0 && (
        <div className="absolute bottom-0 min-h-[200px] h-auto p-4 bg-slate-950 text-gray-100 w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
          <h1>Explore our dictionary</h1>
        </div>
      )}
      {data?.length > 0 ? (
        <div className="absolute bottom-0 min-h-[200px] h-auto p-4 bg-slate-950 text-gray-100 w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
          {data.map((el) => (
            <span>{el}</span>
          ))}
        </div>
      ) : data?.length == 0 ? (
        <div className="absolute bottom-0 min-h-[200px] h-auto p-4 bg-slate-950 text-gray-100 w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
          <h1>No synonym</h1>
        </div>
      ) : null}
    </form>
  );
};

export default SearchBar;
