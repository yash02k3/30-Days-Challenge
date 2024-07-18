//Activity 1: Function Declaration


//Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even.`);
    } else {
        console.log(`${number} is odd.`);
    }
}

// Example usage
checkEvenOdd(4); // This will print "4 is even."
checkEvenOdd(7); // This will print "7 is odd."



//Task 2: Write a function to calculate the square of a number and return the result.
function calculateSquare(number) {
    return number * number;
}

// Example usage
console.log(calculateSquare(5)); // This will print 25
console.log(calculateSquare(9)); // This will print 81
