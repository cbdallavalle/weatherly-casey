import Trie from '../node_modules/@valentinovtino/complete-me/lib/trie.js';
import citiesList from '../__mocks__/citiesData.js';

let trie = new Trie();

citiesList.data.forEach(city => {
  trie.insert(city.toLowerCase());
});

export default trie;