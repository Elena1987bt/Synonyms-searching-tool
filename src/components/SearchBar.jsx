import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
//Transitive rule implementation, i.e. if “B” is a synonym to “A” and “C” a synonym to “B”, then “C” should automatically,
//by transitive rule, also be the synonym for “A”.
const words = [
  { word: "mie", synonyms: ["peri", "kapi", "wash"] }, // A
  { word: "banja", synonyms: ["tusira", "mie", "pliva"] }, // B
  { word: "wash", synonyms: ["clean", "banja", "peri"] },
  { word: "elena", synonyms: ["andrej", "angela", "damjan"] },
  { word: "happy", synonyms: ["joyful", "content", "glad", "cheerful"] },
  {
    word: "glad",
    synonyms: ["pleased", "delighted", "overjoyed", "well pleased"],
  },
  /*   { word: "sad", synonyms: ["unhappy", "melancholy", "gloomy", "depressed"] },
  { word: "big", synonyms: ["large", "huge", "enormous", "gigantic"] }, */
];

// Ako kapi(B) e sinonim so mie(A) i  banja(C) e synonym na kapi(B) togas i banja (C e synonym so mie(A))
// result ----> mie =[peri, kapi, banja, tusira ]----- console. ['peri', 'kapi', 'tusira', 'banja', 'wash', 'clean']
// Opposite direction
// Ako baram i za peri = [mie, kapi, banja, tusira]
// ZA BANJA ['kapi', 'tusira', 'mie', 'wash', 'clean']
/* ------------------------------------------------------------------------------- */
function findSynonyms(words, synonym) {
  // 1.  Check if any occurrence of the element exist. Check if the word exist by itself or it exist as a synonym
  const allInstances = words?.filter((el) => {
    if (el.word == synonym || el.synonyms.includes(synonym)) {
      return el;
    }
  });

  console.log("All instances", allInstances);
  // 2. If no instance exist return
  if (allInstances.length === 0) {
    return console.log("No word found in our dictionary!");
  }

  // 3. if yes return arr with all occurrence and flattered the arr
  const allDirectSynonyms = allInstances
    .map((el) => {
      return [el.word, ...el.synonyms];
    })
    .flat();
  console.log(allDirectSynonyms);

  /*   console.log(allDirectSynonyms); */
  // 4. Remove the duplicates
  const firstHandSynonyms = [...new Set(allDirectSynonyms)];
  console.log("Result 1", firstHandSynonyms); // ['mie', 'peri', 'kapi', 'clean', 'banja']
  // 5. Implement transitive rule
  const final = [
    ...new Set(
      words
        ?.filter((el) => {
          if (firstHandSynonyms.includes(el.word)) {
            return el;
          }
        })
        .map((el) => {
          return [el.word, ...el.synonyms];
        })
        .flat()
    ),
  ].filter((el) => el !== synonym); // remove the searching word itself
  console.log("Result 2", final); //  ['mie', 'peri', 'kapi', 'banja', 'tusira', 'pliva', 'clean']
  return final;
}

findSynonyms(words, "peri");
/* const firstHandSynonyms = findSynonyms(words, "wash");
console.log("Result 1", firstHandSynonyms); ['mie', 'peri', 'kapi', 'clean', 'banja']
const secondHandSynonyms = [
  ...new Set(firstHandSynonyms.map((el) => findSynonyms(words, el)).flat()),
];
console.log("Result 2", secondHandSynonyms);  [
  "peri",
  "kapi",
  "wash",
  "banja",
  "tusira",
  "pliva",
  "mie",
  "clean",
];*/

/* findSynonyms(words, "wash"); */

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
