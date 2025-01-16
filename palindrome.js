// Write a JavaScript function to check if a given string is a palindrome. A string is considered a palindrome if it reads the same backward as forward (e.g., "madam", "racecar").

const checkPalindrome = (str) => {
    // Convert number to string if input is a number
    str = typeof str === 'number' ? str.toString() : str;

    console.log(typeof str); // Check if it's a string

    // Reverse the string and compare
    const reverseStr = [...str].reverse().join('');
    return str === reverseStr ? 'true' : 'false';
};

console.log(checkPalindrome('madam'));    // true
console.log(checkPalindrome('racebike')); // false
console.log(checkPalindrome('dossod'));    // true
console.log(checkPalindrome(101));        // true
