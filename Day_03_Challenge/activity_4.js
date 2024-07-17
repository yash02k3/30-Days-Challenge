//Conditional (Ternary) Operator

//Task6= Wap that uses the ternary operator to check if a number is even or odd and log the 
//result to the console .
function checkEvenOrOdd(number) {
    const result = number % 2 === 0 ? "Even" : "Odd";
    console.log(`${number} is ${result}`);
}

// Example usage:
checkEvenOrOdd(5); // Output: 5 is Odd
checkEvenOrOdd(8); // Output: 8 is Even
