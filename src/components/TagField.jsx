import { useState } from "react";

const TagField = ({ tags, addTag, removeTag, maxTags, inputRefTwo, word }) => {
  // track the use input
  const [userInput, setUserInput] = useState(" ");
  // Handle input onChange
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission or new line creation
      if (
        userInput.trim() !== "" &&
        userInput.length <= 20 &&
        tags.length < maxTags
      ) {
        addTag(userInput);
        setUserInput(""); // Clear the input after adding a tag
      }
    }
  };
  console.log(tags);
  return (
    <div className="flex flex-col w-[300px] md:w-[400px] my-4">
      <input
        name="keyword_tags"
        type="text"
        placeholder={
          tags?.length < maxTags
            ? "Add a tag"
            : `You can only enter max. of ${maxTags} tags`
        }
        className="w-full border border-gray-300 rounded-md px-4 py-3"
        onKeyDown={handleKeyPress}
        onChange={handleInputChange}
        value={userInput}
        disabled={tags.length === maxTags || word.length == 0}
        ref={inputRefTwo}
      />

      {/* Render the tags here  */}

      <div className="flex flex-row flex-wrap gap-3 mt-5 mb-3">
        {tags.map((tag, index) => (
          <span
            key={`${index}-${tag}`}
            className="inline-flex items-start justify-start px-3 py-2 rounded-[32px] text-sm shadow-sm font-medium bg-blue-100 text-blue-800 mr-2"
          >
            {tag}
            <button
              className="ml-2 hover:text-blue-500"
              onClick={() => removeTag(tag)}
              title={`Remove ${tag}`}
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagField;
