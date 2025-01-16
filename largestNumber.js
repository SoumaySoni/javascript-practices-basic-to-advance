// Write a JavaScript function that takes three numbers as input and returns the largest of the three.

var largerNumber = (a, b, c) => (a > b ? (a > c ? a : c) : b > c ? b : c);

console.log(largerNumber(1, 50, 300));

// alternate solution

var largerNumber = (a, b, c) => Math.max(a, b, c);

console.log(largerNumber(100, 500, 900));



