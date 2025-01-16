// Write a JavaScript function that takes an array of numbers as input and returns the sum of all the elements in the array.

const sumArray = (arr) => {
    let sum = 0;   // Initialize sum to 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];  // Add each element to the sum
    }
    return sum;  // Return the final sum
};

console.log(sumArray([1, 2, 3, 4]));