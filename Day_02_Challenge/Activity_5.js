//TERNARY OPERATORS

//Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

function checkNumber(num) {
    let result = num >= 0 ? "Positive" : "Negative";
    console.log(`The number ${num} is ${result}`);
}


checkNumber(5);    
checkNumber(-3);  
checkNumber(0);    