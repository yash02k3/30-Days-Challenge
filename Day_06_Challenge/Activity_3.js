//Activity 3: Array Methods (Intermediate)


//Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let numbersArray = [1, 2, 3, 4, 5];

// Using the map method to create a new array where each number is doubled
let doubledArray = numbersArray.map(num => num * 2);

// Logging the new array to the console
console.log("Doubled array:", doubledArray);


//Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let evenNumbersArray = numbersArray.filter(num => num % 2 === 0);

// Logging the new array to the console
console.log("Even numbers array:", evenNumbersArray);



//Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

let sumOfNumbers = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Logging the result to the console
console.log("Sum of numbers:", sumOfNumbers);
