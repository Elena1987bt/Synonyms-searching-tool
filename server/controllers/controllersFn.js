/* Get All Synonyms */
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
    console.log("No word found in our dictionary!");
    return { word: synonym, synonyms: [] };
  }

  // 3. if yes return arr with all occurrence flattered the arr and remove the duplicated
  const allDirectSynonyms = [
    ...new Set(
      allInstances
        .map((el) => {
          return [el.word, ...el.synonyms];
        })
        .flat()
    ),
  ];

  console.log("Result 1", allDirectSynonyms); // ['mie', 'peri', 'kapi', 'clean', 'banja']
  // 5. Get all related synonyms - Implement transitive rule
  const result = [
    ...new Set(
      words
        ?.filter((el) => {
          if (allDirectSynonyms.includes(el.word)) {
            return el;
          }
        })
        .map((el) => {
          return [el.word, ...el.synonyms];
        })
        .flat()
    ),
  ].filter((el) => el !== synonym); // remove the searching word itself
  console.log("Result 2", result); //  ['mie', 'peri', 'kapi', 'banja', 'tusira', 'pliva', 'clean']
  return { word: synonym, synonyms: result };
}

/* Add a word to a dictionary */
function addNewWord(words, newWord) {
  words.push(newWord);
}

/* Get all words from a dictionary */
function getAllWords(words) {
  return words;
}

module.exports = { findSynonyms, addNewWord, getAllWords };
