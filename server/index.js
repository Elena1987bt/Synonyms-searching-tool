const express = require("express");
const cors = require("cors");
const {
  findSynonyms,
  addNewWord,
  getAllWords,
} = require("./controllers/controllersFn.js");
const { words } = require("./data.js");

const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8000;

app.get("/words", (req, res) => {
  const result = getAllWords(words);
  return res.json({
    statusCode: 200,
    result: result,
    message: "Success!",
    length: result.length,
  });
});
app.get("/words/search", async (req, res) => {
  const searchTerm = req.query.word;
  console.log(searchTerm);
  const result = await findSynonyms(words, searchTerm);
  if (result.length == 0) {
    return res.json({
      statusCode: 200,
      result: result,
      message: "Success!",
    });
  }
  return res.json({
    statusCode: 200,
    result: result,
    message: "Success!",
  });
});
app.post("/words", (req, res) => {
  const newWord = req.body;
  addNewWord(words, newWord);
  return res.json({
    statusCode: 200,
    message: "Success!",
  });
});
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
