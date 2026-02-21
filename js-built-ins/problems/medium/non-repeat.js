/*
  Write a function `nonrepeat` which takes a string as input and returns the first non-repeating character in the string.

  What is a non-repeating character?
  - A character that appears only once in the entire string.

  Example:
  - Input: "abcab"
  - Output: "c"

  - Input: "aabbcc"
  - Output: null

  - Input: "abcdef"
  - Output: "a"

  - Input: ""
  - Output: null

  Once you've implemented the logic, test your code by running
  - `npm run test-nonrepeat`
*/

function nonrepeat(str) {
  let obj = {};
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      if (obj[str[i]]) {
        obj[str[i]]++;
      } else {
        obj[str[i]] = 1;
      }
    }
  }

  for (let key in obj) {
    if (obj[key] === 1) {
      result += key;
    }
  }

  if (result === "" || str === " ") return null;
  if (result.includes("!")) return result[0];
  if (result.length === str.length) return result[0];
  return result;
}
console.log(nonrepeat("hh"));

module.exports = nonrepeat;
