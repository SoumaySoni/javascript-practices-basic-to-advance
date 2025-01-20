// Write a JavaScript function to check if two given strings are anagrams of each other. Two strings are considered anagrams if they contain the same characters in the same frequency but in any order.

// 1. Using the Sort-Based Approach

var areAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) return false; // Early check for unequal lengths

  // Sort both strings and compare
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
};

console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("triangle", "integral")); // Output: true
console.log(areAnagrams("apple", "pale")); // Output: false

//2. Using the Frequency Map Approach

var areAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) return false; // Early check for unequal lengths

  const charCount = {};

  // Count characters in the first string
  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Reduce count based on the second string
  for (let char of str2) {
    if (!charCount[char]) return false; // If char is missing or count is 0, not an anagram
    charCount[char] -= 1;
  }

  return true; // All counts matched
};

console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("triangle", "integral")); // Output: true
console.log(areAnagrams("apple", "pale")); // Output: false
