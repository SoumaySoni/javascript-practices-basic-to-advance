// Write a JavaScript function that takes an array as input and returns a new array with all duplicate elements removed.

var removeDuplicates = (array) => {
    return [...new Set(array)]; // Convert array to Set and back to array
};

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));  
console.log(removeDuplicates(["a", "b", "a", "c", "b"])); 
console.log(removeDuplicates([])); 

// By using filter() ..............................

var removeDuplicates = (array) => {
    return array.filter((value, index) => array.indexOf(value) === index);
};

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5])); 
console.log(removeDuplicates(["a", "b", "a", "c", "b"])); 
console.log(removeDuplicates([])); 


// By using for loop ......................................

var removeDuplicates = (array) => {
    const uniqueArray = []; // Initialize an empty array to store unique elements

    for (let i = 0; i < array.length; i++) {
        if (!uniqueArray.includes(array[i])) {
            uniqueArray.push(array[i]); // Add element only if it doesn't already exist
        }
    }

    return uniqueArray;
};

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));  
console.log(removeDuplicates(["a", "b", "a", "c", "b"])); 
console.log(removeDuplicates([]));  
