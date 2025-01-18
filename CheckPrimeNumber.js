// Write a JavaScript function that takes a positive integer as input and returns true if the number is a prime number, otherwise returns false.
const checkPrimeNumber = (num) => {
    if (num < 0) return "Enter a positive number";
    if (num === 0 || num === 1) return `${num} is not a prime number. The number must be greater than 1.`;

    // Check divisors up to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return `${num} is not a prime number`; // Return if divisible
    }

    return `${num} is a prime number`; // Return if no divisors are found
};

console.log(checkPrimeNumber(12));
console.log(checkPrimeNumber(7));
console.log(checkPrimeNumber(-5));