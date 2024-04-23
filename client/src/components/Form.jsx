import { useState, useRef, useEffect } from "react";
import SynonymField from "./SynonymField";
import Loader from "./Loader";

const Form = () => {
  const [synonyms, setSynonyms] = useState([]);
  const [word, setWord] = useState("");
  // track the use input for synonyms
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const inputRefTwo = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // Handle input onChange
  const handleWordChange = (e) => {
    setWord(e.target.value);
  };
  //define the MaxSynonyms
  const MAX_SYNONYMS = 10;

  // Function to handle adding the tag to the array
  const handleAddSynonym = (newTag) => {
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
  const handleRemoveSynonym = (synonym) => {
    setSynonyms((prevSynonyms) => prevSynonyms.filter((t) => t !== synonym));
    if (synonyms.length === 1) {
      inputRef.current.focus();
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (word.length === 0) {
      setError("Word field must not be empty!");
      return;
    }
    if (synonyms.length === 0) {
      setError("Word must have at least one synonym!");
      return;
    }
    if (word.length === 0 && synonyms.length === 0) {
      setError((prev) => "You must fill all the fields!");
      return;
    }
    console.log("Run to backend");
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8000/words`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ word: word, synonyms: synonyms }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }
      let res = await response.json();
      setSuccess(true);
      console.log(res?.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setWord("");
      setSynonyms([]);
      setUserInput("");
    }
  };
  // SetTimeout to remove err message
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setError("");
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [error]);
  // SetTimeout to remove success message
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSuccess(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [success]);
  return (
    <form className="flex flex-col w-full md:w-[400px]">
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
        addTag={handleAddSynonym}
        removeTag={handleRemoveSynonym}
        maxSynonyms={MAX_SYNONYMS}
        inputRefTwo={inputRefTwo}
        word={word}
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <button
        onClick={(e) => handleSubmit(e)}
        className="bg-blue-800 text-white p-3 rounded outline-none border-none transform transition duration-300  hover:bg-blue-600 "
      >
        Submit
      </button>
      {success && (
        <h1
          className="my-10  text-center   tracking-tight leading-2 text-green-900 text-md lg:text-xl
        "
        >
          Success!
          <br />
          <p className="mt-2 text-3xl">👏👏👏</p>
        </h1>
      )}
      {error && <p className="text-red-200 mt-10">* {error}</p>}
      {loading && <Loader />}.
    </form>
  );
};

export default Form;
