//if else statement

//Task 1 : Write a program to check if a number is positive ,negative, or zero 
// and log the result to the console .
function checkNumber(num) {
    let result = num > 0 ? "Positive" : (num < 0 ? "Negative" : "Zero");
    console.log(`The number ${num} is ${result}`);
}

// Example usage:
checkNumber(5);    // Output: The number 5 is Positive
checkNumber(-3);   // Output: The number -3 is Negative
checkNumber(0);    // Output: The number 0 is Zero


// Task 2 : Write a program to check if a person is eligible to vote(age>=18)and log the result to the console 

function checkEligibility(age) {
    let result = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
    console.log(`The person with age ${age} is ${result}`);
}

// Example usage:
checkEligibility(20);  // Output: The person with age 20 is Eligible to vote
checkEligibility(16);  // Output: The person with age 16 is Not eligible to vote
checkEligibility(18);  // Output: The person with age 18 is Eligible to vote
