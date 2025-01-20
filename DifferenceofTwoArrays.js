// Write a JavaScript function to find the difference of two arrays. The difference should contain elements that are in the first array but not in the second array.

// Using Filter() :

var differenceofTwoArrays = (array1, array2) => {
    return array1.filter((num1) => !array2.includes(num1));
};

console.log(differenceofTwoArrays([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])); 
// Output: [1, 2]


// Using for loop :

var differenceofTwoArrays = (array1, array2) => {
    const result = [];
    for (let num of array1) {
        if (!array2.includes(num)) {
            result.push(num);
        }
    }
    return result;
};

console.log(differenceofTwoArrays([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])); 
// Output: [1, 2]
