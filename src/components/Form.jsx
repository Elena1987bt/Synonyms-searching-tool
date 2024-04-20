import { useState, useRef } from "react";
import TagField from "./TagField";

const Form = () => {
  const [tags, setTags] = useState([]);
  const [word, setWord] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const inputRefTwo = useRef(null);
  // Handle input onChange
  const handleWordChange = (e) => {
    setWord(e.target.value);
  };
  //define the MaxTags
  const MAX_TAGS = 10;

  // Function to handle adding the tag to the array
  const handleAddTag = (newTag) => {
    if (newTag && !tags.includes(newTag) && tags.length < MAX_TAGS) {
      setTags([...tags, newTag]);
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
  const handleRemoveTag = (tag) => {
    setTags((prevTags) => prevTags.filter((t) => t !== tag));
    if (tags.length === 1) {
      setWord("");
      inputRef.current.focus();
    }
  };
  console.log(word);
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (word.length === 0) {
      setError("Word field must not be empty!");
    }
    if (tags.length === 0) {
      setError("Word must have at least one synonym!");
    }
    if (word.length === 0 && tags.length === 0) {
      setError((prev) => "You must fill all the fields!");
    }

    console.log("Run to backend");
  };
  console.log(error);
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
      <TagField
        tags={tags}
        addTag={handleAddTag}
        removeTag={handleRemoveTag}
        maxTags={MAX_TAGS}
        inputRefTwo={inputRefTwo}
        word={word}
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
