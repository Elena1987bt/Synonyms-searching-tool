import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Dictionary from "./pages/Dictionary";
export default function App() {
  class TrieNode {
    constructor() {
      this.children = {};
      this.synonyms = [];
    }
  }

  class Trie {
    constructor() {
      this.root = new TrieNode();
    }

    insert(word, synonyms) {
      let node = this.root;
      for (const char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.synonyms = synonyms;
    }

    searchSynonyms(word) {
      let node = this.root;
      for (const char of word) {
        if (!node.children[char]) {
          return null;
        }
        node = node.children[char];
      }
      return node.synonyms.length > 0 ? node.synonyms : null;
    }
  }

  // Example usage:
  const trie = new Trie();
  trie.insert("happy", ["joyful", "pleased", "content"]);
  trie.insert("sad", ["unhappy", "miserable", "gloomy"]);
  trie.insert("mie", ["peri", "kapi", "wash"]); // A
  trie.insert("banja", ["tusira", "mie", "peri", "pliva"]); // B */
  trie.insert("wash", ["clean", "banja", "peri"]);
  trie.insert("elena", ["andrej", "angela", "damjan"]);
  trie.insert("happy", ["joyful", "content", "glad", "cheerful"]);
  trie.insert("glad", ["pleased", "delighted", "overjoyed", "well pleased"]);

  const wordToSearch = "wash";
  const synonyms = trie.searchSynonyms(wordToSearch);
  let arr = synonyms;
  if (synonyms) {
    console.log(`Synonyms of '${wordToSearch}': ${synonyms.join(", ")}`);
    synonyms.forEach((el) => {
      arr.push(trie.searchSynonyms(el));
    });
    console.log(arr);
    const f = [...new Set(arr.filter((el) => el !== null).flat())];
    console.log(f);
  } else {
    console.log(`No synonyms found for '${wordToSearch}'`);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
