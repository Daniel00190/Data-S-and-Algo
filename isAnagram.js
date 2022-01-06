/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
   if (s.length !== t.length) return false;

   let map = new Map();

   for (c of s) {
      map[c] ? map[c]++ : (map[c] = 1);
   }
   for (l of t) {
      if (!map[l]) return false;
      map[l]--;
   }
   return true;
};

console.log(isAnagram("rat", "car"));
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("aacc", "ccac"));
