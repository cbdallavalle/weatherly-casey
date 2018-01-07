import Trie from '../node_modules/@valentinovtino/complete-me/lib/trie.js';
import Cities from './Cities.js';

let trie = new Trie();

Cities.data.forEach(city => {
  trie.insert(city.toLowerCase())
})

export default trie;


