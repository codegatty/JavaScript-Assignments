/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {

    // Skip non-alphanumeric from left
    while (left < right && !/[a-z0-9]/i.test(str[left])) {
      left++;
    }

    // Skip non-alphanumeric from right
    while (left < right && !/[a-z0-9]/i.test(str[right])) {
      right--;
    }

    // Compare lowercase characters
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome('Able, was I ere I saw Elba!'))
module.exports = isPalindrome;
