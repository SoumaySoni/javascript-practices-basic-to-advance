// Write a JavaScript function that checks if a given array contains any duplicate elements.


// Using new Set() ...................
var hasDuplicates = (array) => {
    const seen = new Set();
    for (const num of array) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
};

console.log(hasDuplicates([1, 2, 3, 4, 5, 6]));            
console.log(hasDuplicates([1, 2, 3, 3, 4, 5, 6]));       
console.log(hasDuplicates([7, 8, 8, 9, 10, 11]));       
console.log(hasDuplicates([1, 2, 3, 4, 5, 6, 6]));       

// Using loop ........................

var hasDuplicates = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return true;
            }
        }
    }
    return false;
};

console.log(hasDuplicates([1, 2, 3, 4, 5, 6]));         
console.log(hasDuplicates([1, 2, 3, 3, 4, 5, 6]));    
console.log(hasDuplicates([7, 8, 8, 9, 10, 11]));     