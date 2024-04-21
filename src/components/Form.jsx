import { useState, useRef, useEffect } from "react";
import SynonymField from "./SynonymField";

const Form = () => {
  const [synonyms, setSynonyms] = useState([]);
  const [word, setWord] = useState("");
  // track the use input for synonyms
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const inputRefTwo = useRef(null);
  // Handle input onChange
  const handleWordChange = (e) => {
    setWord(e.target.value);
    /*     if (word.trim().length === 1) {
      setUserInput("");
    } */
  };
  //define the Maxsynonyms
  const MAX_SYNONYMS = 10;

  // Function to handle adding the tag to the array
  const handleAddTag = (newTag) => {
    if (
      newTag &&
      !synonyms.includes(newTag) &&
      synonyms.length < MAX_SYNONYMS
    ) {
      setSynonyms([...synonyms, newTag]);
    }
  };
  // handle word input Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      inputRefTwo?.current?.focus();
    }
  };
  // Function to remove tag from array
  const handleRemoveTag = (synonym) => {
    setSynonyms((prevSynonyms) => prevSynonyms.filter((t) => t !== synonym));
    if (synonyms.length === 1) {
      /*  setWord(""); */

      inputRef.current.focus();
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (word.length === 0) {
      setError("Word field must not be empty!");
    }
    if (synonyms.length === 0) {
      setError("Word must have at least one synonym!");
    }
    if (word.length === 0 && synonyms.length === 0) {
      setError((prev) => "You must fill all the fields!");
    }

    console.log("Run to backend");
    /*   setWord("");
    setSynonyms([]); */
  };
  // SetTimeout to remove err message
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setError("");
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [error]);
  return (
    <form className="flex flex-col w-[300px] md:w-[400px]">
      <input
        autoFocus
        name="word"
        type="text"
        placeholder="Add a word"
        className="w-full border border-gray-300 rounded-md px-4 py-3"
        onKeyDown={handleKeyPress}
        onChange={handleWordChange}
        value={word}
        ref={inputRef}
      />
      <SynonymField
        synonyms={synonyms}
        addTag={handleAddTag}
        removeTag={handleRemoveTag}
        maxSynonyms={MAX_SYNONYMS}
        inputRefTwo={inputRefTwo}
        word={word}
        userInput={userInput}
        setUserInput={setUserInput}
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-800 text-white p-3 rounded outline-none border-none transform transition duration-300  hover:bg-blue-600 "
      >
        Submit
      </button>
      {error && <p className="text-red-200 mt-10">* {error}</p>}
    </form>
  );
};

export default Form;
