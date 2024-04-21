import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const words = [
  { word: "mie", synonyms: ["peri", "kapi"] },
  { word: "kapi", synonyms: ["tusira", "banja", "mie"] },
  { word: "wash", synonyms: ["clean", "banja", "mie"] },
];

// Ako kapi(B) e sinonim so mie(A) i  banja(C) e synonym na kapi(B) togas i banja (C e synonym so mie(A))
// result ----> mie =[peri, kapi, banja, tusira ]
// Opposite direction
// Ako baram i za peri = [mie, kapi, banja, tusira]

// 1. First to find the word

function findSynonyms(words) {
  const synonym = "kapi";
  let arr = [];
  // Check if el exist
  const word = words?.filter(
    (el) => el.word == synonym || el.synonyms.includes("kapi")
  );
  /*   if (word) {
    arr = [...arr, word.synonyms];
  } */

  console.log(word);
  // Find the synonyms
  words.forEach((el) => {});

  //

  return arr;
}
findSynonyms(words);

const SearchBar = () => {
  const [activeSearch, setActiveSearch] = useState([]);

  const handleSearch = (e) => {
    if (e.target.value == "") {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(
      words.filter((w) => w.includes(e.target.value)).slice(0, 8)
    );
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
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 md:w-32 py-4 md:py-3 px-4 bg-blue-600 rounded-full text-white transform transition duration-500 hover:bg-blue-700">
          <div className="flex items-center">
            <span className=""></span>
            <AiOutlineSearch />
            <span className="ml-3 text-md hidden md:block">Search</span>
          </div>
        </button>
      </div>

      {activeSearch.length > 0 && (
        <div className="absolute bottom-0 min-h-[200px] h-auto p-4 bg-slate-800 text-gray-100 w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
          {activeSearch.map((s) => (
            <span>{s}</span>
          ))}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
