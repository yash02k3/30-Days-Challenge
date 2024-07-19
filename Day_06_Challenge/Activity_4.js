//Activity 4: Array Iteration

//Task 10: Use a for loop to iterate over the array and log each element to the console.

let numbersArray = [1, 2, 3, 4, 5];

// Using a for loop to iterate over the array and log each element to the console
for (let i = 0; i < numbersArray.length; i++) {
    console.log("Element using for loop:", numbersArray[i]);
}



//Task 11: Use the forEach method to iterate over the array and log each element to the console.

numbersArray.forEach(element => {
    console.log("Element using forEach:", element);
});