// Write a JavaScript function that takes a number as input and determines if the number is even or odd.

var checkNumber = (num) => (num % 2 === 0 ? "even" : "odd");

console.log(checkNumber(16));


// breakdown code for understanding .....................................

// Input: A number (e.g., 16)
// Output: "even" if the number is even, "odd" if the number is odd
var checkNumber = (num) => {
    // Check if the number is divisible by 2
    // If divisible, return "even", otherwise return "odd"
    return (num % 2 === 0) ? "even" : "odd";
};

// Example usage
console.log(checkNumber(12));  // Outputs: "even"