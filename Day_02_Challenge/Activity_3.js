// COMPARISON OPERATORS

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.

function compareUsingGreaterThanLessThan(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is greater than ${num2}`);
    } else if (num1 < num2) {
        console.log(`${num1} is less than ${num2}`);
    } else {
        console.log(`${num1} is equal to ${num2}`);
    }
}


let number1 = 10;
let number2 = 5;
compareUsingGreaterThanLessThan(number1, number2);


// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

function compareUsingGreaterThanOrEqualLessThanOrEqual(num3, num4) {
    if (num3 >= num4) {
        console.log(`${num3} is greater than or equal to ${num4}`);
    } else if (num3 <= num4) {
        console.log(`${num3} is less than or equal to ${num4}`);
    } else {
        console.log(`${num3} is not comparable to ${num4}`);
    }
}

let number3 = 10;
let number4 = 5;
compareUsingGreaterThanOrEqualLessThanOrEqual(number3, number4);


// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
function compareUsingDoubleEqualAndTripleEqual(num5, num6) {
    if (num5 == num6) {
        console.log(`${num5} is loosely equal to ${num6}`);
    } else {
        console.log(`${num5} is not loosely equal to ${num6}`);
    }

    if (num5 === num6) {
        console.log(`${num5} is strictly equal to ${num6}`);
    } else {
        console.log(`${num5} is not strictly equal to ${num6}`);
    }
}


let number5 = 10;
let number6 = "10"; // Note: "10" is a string
compareUsingDoubleEqualAndTripleEqual(number5, number6);
