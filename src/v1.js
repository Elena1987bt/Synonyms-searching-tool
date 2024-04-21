const words = [
  { word: "mie", synonyms: ["peri", "kapi", "wash"] }, // A
  { word: "kapi", synonyms: ["tusira", "banja", "mie", "pliva"] }, // B
  { word: "wash", synonyms: ["clean", "banja", "peri"] }, // C
  { word: "elena", synonyms: ["andrej", "angela", "damjan"] },
  /*   { word: "happy", synonyms: ["joyful", "content", "glad", "cheerful"] },
    {
      word: "sad",
      synonyms: ["unhappy", "melancholy", "gloomy", "depressed"],
    },
    { word: "big", synonyms: ["large", "huge", "enormous", "gigantic"] }, */
];

// Ako kapi(B) e sinonim so mie(A) i  banja(C) e synonym na kapi(B) togas i banja (C e synonym so mie(A))
// result ----> mie =[peri, kapi, banja, tusira ]----- console. ['peri', 'kapi', 'tusira', 'banja', 'wash', 'clean']
// Opposite direction
// Ako baram i za peri = [mie, kapi, banja, tusira]

// ZA BANJA ['kapi', 'tusira', 'mie', 'wash', 'clean']
function findSynonyms(words, synonym) {
  // 1.  Check if any occurrence of the element exist
  const allInstances = words?.filter((el) => {
    if (el.word == synonym || el.synonyms.includes(synonym)) {
      return el;
    }
  });

  // 2. If no return
  if (allInstances.length === 0) {
    return console.log("No word found in our dictionary!");
  }
  console.log(allInstances);
  // 3. if yes return arr with all occurrence and flattered the arr
  const x = allInstances
    .map((el) => {
      return [el.word, ...el.synonyms];
    })
    .flat();
  console.log(x);
  // 4. Remove the duplicates
  const uniq = [...new Set(x)];
  console.log(uniq);
  // 5. Exclude the searching word from the result arr
  const final = uniq.filter((el) => el !== synonym);
  console.log(final);

  return final;
}

findSynonyms(words, "content");
/* findSynonyms(words, "wash"); */
